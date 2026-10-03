(function(){
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 window.XS={getState(){return JSON.parse(localStorage.getItem('xtraskillState')||'{}')},setState(p){const s={...this.getState(),...p};localStorage.setItem('xtraskillState',JSON.stringify(s));return s},toast(msg){const t=$('#toast');if(t){t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2400)}},escape(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-menu]');if(b){$('#navLinks')?.classList.toggle('show')}});
 $$('[data-accordion]').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
 const year=$('#year');if(year)year.textContent=new Date().getFullYear();
})();
