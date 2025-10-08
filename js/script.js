const lightBtn=document.getElementById('lightBtn');
const darkBtn=document.getElementById('darkBtn');
const body=document.body;


lightBtn.addEventListener('click', () =>
{
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
});

darkBtn.addEventListener('click', () =>
{
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
});