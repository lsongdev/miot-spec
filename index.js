import { ready } from 'https://lsong.org/scripts/dom.js';

ready(() => {
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const result = document.getElementById('result');

  form1.addEventListener("submit", async e => {
    e.preventDefault();
    const form = e.target;
    const status = form.querySelector('select');
    const model = form.querySelector('input');
    const res = await fetch(form.action + `?${status.name}=${status.value}`);
    const data = await res.json();
    const instances = data.instances.filter(instance => model.value == instance.model);
    result.innerHTML = '';
    instances.forEach(instance => {
      const li = document.createElement('li');
      li.textContent = instance.type;
      result.appendChild(li);
    });
  });
});