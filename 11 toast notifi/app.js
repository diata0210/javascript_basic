var btnSuccess = document.querySelector('button.success');
var btnWarning = document.querySelector('button.warning');
var btnError = document.querySelector('button.error');
var btns = document.querySelectorAll('button')

btns.forEach(btn =>{
    btn.onclick = e => {
        render(e.target.getAttribute('class'));
    }
})

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
	}
}
function render(status){
    var toast  = document.createElement('div');
    toast.className = `toast ${toasts[status]}`
    toast.innerHTML = 
    ` ${toasts[status].icon}
        <span class="msg">${toasts[status].msg}</span>
        <span class="countdown"></span>
    `
	document.querySelector('#toasts').appendChild(toast)  
    setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toast.remove()
	}, 6000)
}