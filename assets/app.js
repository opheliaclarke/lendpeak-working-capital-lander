/* ===== LendPeak shared JS ===== */
(function(){
  // Sticky header shadow
  var hdr=document.querySelector('header.site');
  if(hdr)addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>10);});

  // Capture GCLID (for offline conversion / funded-deal import)
  var gclid=new URLSearchParams(location.search).get('gclid');
  if(gclid)document.querySelectorAll('input.gclid').forEach(function(i){i.value=gclid;});

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
