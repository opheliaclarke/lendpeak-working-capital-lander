/* ===== LendPeak shared JS ===== */
(function(){
  // Sticky header shadow
  var hdr=document.querySelector('header.site');
  if(hdr)addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>10);});

  // Capture GCLID (for offline conversion / funded-deal import)
  var params=new URLSearchParams(location.search);
  var gclid=params.get('gclid');
  if(gclid)document.querySelectorAll('input.gclid').forEach(function(i){i.value=gclid;});

  // Controlled dynamic LP — message match from ad ?h= param (WHITELIST only; never raw query insertion).
  // The param lives in each ad group's FINAL URL, so 100% of clicks carry it. If absent/unknown or JS off,
  // the page keeps its default headline/sub — graceful fallback, never broken.
  var HEADS={
    sameday:'Same-day business funding — <span class="hl">decision in 24 hours.</span>',
    badcredit:'Bad credit? <span class="hl">You may still qualify for funding.</span>',
    apply:'Apply in 60 seconds — <span class="hl">funding in as fast as 24 hours.</span>',
    bigticket:'$100K&ndash;$1M in business funding, <span class="hl">fast.</span>',
    mca:'Merchant cash advance — <span class="hl">funded in as fast as 24 hours.</span>'
  };
  var SUBS={
    sameday:"Same-day decisions and funding in as little as 24 hours. Apply in 60 seconds with a soft credit pull — no impact to your score.",
    badcredit:"Approved on your revenue, not just your credit. We consider 550+, and checking your options won't affect your credit score.",
    apply:"Apply in 60 seconds with a soft pull and see your options. Funds in as fast as 24 hours after signing. No collateral, bad credit considered.",
    bigticket:"$100K&ndash;$1M in working capital for established businesses. No collateral, revenue-based repayment, funds in as fast as 24 hours.",
    mca:"Get $10,000&ndash;$1,000,000 advanced against your future sales. Soft credit pull, no collateral, bad credit considered."
  };
  var hKey=params.get('h'), hEl=document.getElementById('dynhead'), sEl=document.getElementById('dynsub');
  if(hKey && HEADS[hKey]){
    if(hEl) hEl.innerHTML=HEADS[hKey];
    if(sEl && SUBS[hKey]) sEl.innerHTML=SUBS[hKey];
  }

  // Seamless, always-full client logo marquee.
  // 1) repeat the logos until one "half" is wider than the screen (no empty space)
  // 2) duplicate that half once → two identical halves so translateX(-50%) loops invisibly
  // 3) set duration from width for a constant, smooth speed regardless of how many logos
  function buildMarquee(){
    var track=document.querySelector('.marquee .track');
    if(!track) return;
    if(track.dataset.unit){ track.innerHTML=track.dataset.unit; }      // reset on rebuild
    else { track.dataset.unit=track.innerHTML; }
    var unit=track.dataset.unit, guard=0;
    while(track.scrollWidth < window.innerWidth + 200 && guard < 30){ track.innerHTML += unit; guard++; }
    track.innerHTML += track.innerHTML;                                // two identical halves
    var halfW = track.scrollWidth / 2;
    track.style.animationDuration = Math.max(20, Math.round(halfW / 70)) + 's';  // ~70px/sec
  }
  buildMarquee();
  var rzT; addEventListener('resize', function(){ clearTimeout(rzT); rzT=setTimeout(buildMarquee, 250); });

  // Amount selector tiles
  document.querySelectorAll('.amount-grid').forEach(function(grid){
    grid.querySelectorAll('.opt').forEach(function(o){
      o.addEventListener('click',function(){
        grid.querySelectorAll('.opt').forEach(function(x){x.classList.remove('sel');});
        o.classList.add('sel');
        var hid=grid.parentElement.querySelector('input[data-amount]');
        if(hid){hid.value=o.dataset.val;hid.closest('.field').classList.remove('invalid');}
      });
    });
  });

  // Validate a scope (a step or a whole form)
  function validateScope(scope){
    var ok=true;
    scope.querySelectorAll('[required]').forEach(function(f){
      var field=f.closest('.field');var bad=!f.value;
      if(f.type==='email'&&f.value)bad=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value);
      if(f.type==='tel'&&f.value)bad=f.value.replace(/\D/g,'').length<10;
      if(f.type==='checkbox')bad=!f.checked;
      if(field)field.classList.toggle('invalid',bad);
      if(bad)ok=false;
    });
    return ok;
  }

  // Wire every lead form (multi-step or single)
  document.querySelectorAll('form.leadForm').forEach(function(form){
    var steps=form.querySelectorAll('.step');
    var cur=1,total=steps.length;
    function showStep(n){
      steps.forEach(function(s){s.classList.toggle('active',+s.dataset.step===n);});
      form.querySelectorAll('.progress span').forEach(function(p,i){p.classList.toggle('on',i<n);});
      cur=n;
    }
    if(total){
      form.querySelectorAll('[data-next]').forEach(function(b){b.addEventListener('click',function(){
        if(validateScope(form.querySelector('.step[data-step="'+cur+'"]')))showStep(cur+1);
      });});
      form.querySelectorAll('[data-back]').forEach(function(b){b.addEventListener('click',function(){showStep(cur-1);});});
    }
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var scope=total?form.querySelector('.step[data-step="'+cur+'"]'):form;
      if(!validateScope(scope))return;
      // In production: POST all fields (incl. gclid) to the CRM / lead endpoint here.
      var card=form.closest('.formcard')||form.parentElement;
      form.style.display='none';
      var ok=card.querySelector('.fc-success');
      if(ok){ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});}
    });
  });

  // FAQ accordion
  document.querySelectorAll('.qa button').forEach(function(b){
    b.addEventListener('click',function(){
      var qa=b.parentElement,open=qa.classList.contains('open');
      document.querySelectorAll('.qa').forEach(function(x){x.classList.remove('open');});
      if(!open)qa.classList.add('open');
    });
  });

  // Scroll reveal
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.18});
  document.querySelectorAll('[data-animate]').forEach(function(el){io.observe(el);});
})();
