var upload = document.querySelector('#upfile');
var wrap = document.querySelector('.wrap');
var span = document.querySelector('span');

upload.onchange = (e) =>{
    // console.log(URL.createObjectURL(upload.files[0]));
    var img = document.createElement('img');
    
    var file = upload.files[0];console.log(file);
    if(!file)
        return ;
    if(!file.name.endsWith('.jpg'))
        span.innerText = 'Hinh anh chua duoc dinh dang jpg';
    else
        span.innerText = '';
    if(file.size / 1024 / 1024 > 5)
        span.innerText = 'HInh anh chi duoc upload anh 5MB';
    else
        span.innerText = ''
    
    img.src = URL.createObjectURL(file);
    wrap.appendChild(img);
    

}