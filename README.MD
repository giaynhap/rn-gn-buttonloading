# rn-gn-buttonloading
Button loading animation


# Install
> npm install rn-gn-buttonloading

# Example
```
import ButtonLoading from 'rn-gn-buttonloading'
```

```
<ButtonLoading  
        loadingColor = {"white"} // mau thanh loading
        background = {{ backgroundColor:'#1ab57c' }} // style cua backgorund
        textstyle = {{color:'white'}} // style cua textview
       
        onPress={()=>{
           //sau khi an 5s sau thi quay tro lai ban dau
           setTimeout(()=>this.button.cancel(),5000) // dung  .cancel() de dung loading tro ve ban dau

        }}
        
        ref={(btn)=>{
          this.button = btn; // lay handle cua button nay vao this.button
        }} 
        
        size= {40} style= {{color:'white'}} title="HelloWorld" />
 ```
# ScreenShoot

![Demo](https://raw.githubusercontent.com/giaynhap/rn-gn-buttonloading/master/gif.gif)