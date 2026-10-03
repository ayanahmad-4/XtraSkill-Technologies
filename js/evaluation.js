document.addEventListener('DOMContentLoaded',()=>{const s=XS.getState();document.querySelectorAll('[data-eval]').forEach(el=>el.textContent=s.evaluationStatus||'Passed');});
