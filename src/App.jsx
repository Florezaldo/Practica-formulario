import { Controller, useForm } from "react-hook-form";
import { Grid, Input } from 'antd'
import { Button } from "antd";
import { InputNumber } from 'antd';
import { Checkbox } from 'antd';
import { Radio } from 'antd';
import { Select } from 'antd';
import { Switch } from 'antd';
import useItems from "antd/es/menu/hooks/useItems";


export  function App(){
    const {register, handleSubmit,watch, formState: {errors,}, control} = useForm();
    const onSubmit = data => console.log(data);
    const array =['C#','Java','JavaScript'];
    const array1=[1,2,3,4,5];
    const array2=['junior front-end','junior back-end','senior front-end','senior back-end','full-stack']
    const ventana = watch('firstname')

return (
<div style={{
  display: 'grid',
  placeItems: 'center',
  width: '400px',
  background:'linear-gradient(180deg, #a6ffff 0, #a7ffff 25%, #9dd5f2 50%, #899dab 75%, #706f6e 100%)',
  padding: '30px',
  margin: 'auto',
  margintop: '100px',
  borderradius: '10px',
  boxshadow: '7px 13px 37px #000',
}}>
<form
     onSubmit={handleSubmit(onSubmit)}>

 <Controller
  control={control}
  name="firstName"
  
  rules={{
    required: true,
    minLength: 4,
    maxLength: 8,
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
   <Input 
   style={{
    display: 'block',
        marginRight:'auto',
        marginLeft:'auto',
        placeItems: 'center',
}}
   placeholder="Full Name"
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    value={value}
    inputRef={ref} />
  )}
/>
        <p
        style={{color: 'red',fontSize: '10px'
        }}>{errors.firstName?.type==='required'?'campo requerido':""}</p>
        <p
        style={{color: 'red',fontSize: '10px'
         }}>{errors.firstName?.type==='minLength'?'minimo no valido':""}</p>
        <p
        style={{color: 'red',fontSize: '10px'
        }}>{errors.firstName?.type==='maxLength'?'maximo no valido':""}</p>

<Controller
  control={control}
  name="edad"
  rules={{
    required: true,
    min: 18,
    max: 30,
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
   <InputNumber
   placeholder="Age 18-30"
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    value={value}
    inputRef={ref} />
  )}
/>
        <p
        style={{color: 'red',fontSize: '10px'
        }}>{errors.edad?.type==='required'?'campo requerido':""}</p>
        <p
        style={{color: 'red',fontSize: '10px'
        }}>{errors.edad?.type==='min'?'minimo no valido':""}</p>
        <p
        style={{color: 'red',fontSize: '10px'
        }}>{errors.edad?.type==='max'?'maximo no valido':""}</p>


<Controller
  control={control}
  name="conocimiento"
  rules={{
    required: true,
   
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <>
    <p
    style={{
      display: 'block',
          marginRight:'auto',
          marginLeft:'auto',
          placeItems: 'center',
  }}>Marque los lenguajes de progrmacion que maneja</p>
    <Checkbox.Group
    options={array}
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    Checkbox={value}
    inputRef={ref} />
    </>
   
  )}
/>
        <p style={{color: 'red',fontSize: '10px'
            }}>{errors.conocimiento?.type==='required'?'campo requerido':""}</p>

 <Controller
  control={control}
  name="nivel"
  rules={{
    required: true,
   
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <>
    <p
      style={{
        display: 'block',
        margin:'center',
        textAlign:'center',
    }}>Marque de 1 a 5 su nivel de conocimiento en REACT</p>
    <Radio.Group
    options={array1}
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    Checkbox={value}
    inputRef={ref} />
    </>
   
  )}
/>
        <p style={{color: 'red',fontSize: '10px'
            }}>{errors.nivel?.type==='required'?'campo requerido':""}</p>
       

<Controller
  control={control}
  name="experiencia"
  rules={{
    required: true,
   
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <>
    
    <Select
    style={{
        width: '75%',
    }}
    placeholder="Inserte nivel de experiencia"
    options={array2.map((item) => ({
        value: item,
        label: item,}))}
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    value={value}
    inputRef={ref} />
    </>
   
  )}
/>
        <p style={{color: 'red',fontSize: '10px'
            }}>{errors.experiencia?.type==='required'?'campo requerido':""}</p>
       



<Controller
  control={control}
  name="terminos"
  rules={{
    required: true,
   
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <>
    <div 
    style= {{width: '90%',
    display:'flex',
    alignitems: 'center',}}>
    <p 
    style={{
          display: 'block',
          margin:'auto',
          textAlign:'center',
          
  }}>¿Desea recibir informacion ?</p>
    <Switch
    
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    value={value}
    inputRef={ref} />
    </div>    </>
   
  )}
/>
        <p style={{color: 'red',fontSize: '10px'
            }}>{errors.terminos?.type==='required'?'campo requerido':""}</p>

        {errors.exampleRequired && <span>llene todos los campos</span>}
      

  <Controller
    control={control}
    name="cedula"
    rules={{
    required: true,
    }}

    render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
    }) => (
            <>
            <div style= {{width: '85%',
                display:'flex',
                alignitems: 'center',}}>

                <p 
                  style={{
                  display: 'block',
                  margin:'auto',
                  textAlign:'center',}}>¿marque si tiene cedula ?
                </p>

                <Checkbox
        
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  value={value}
                  inputRef={ref} />

            </div>
            </>

          )}
  />
{
  watch('cedula' ) &&  <Controller
  control={control}
  name="cedulanum"
  
  rules={{
    required: true,
    minLength: 9,
    maxLength: 10,
  }}
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
   <InputNumber 
   style={{
          width: '30%',
         display: 'block',
        marginRight:'auto',
        marginLeft:'auto',
        placeItems: 'center',
}}
   placeholder="digite cedula"
    onBlur={onBlur} // notify when input is touched
    onChange={onChange} // send value to hook form
    value={value}
    inputRef={ref} />
  )}
/>
}
        <p style={{color: 'red',
                  fontSize: '10px'}}>
            {errors.cedulanum?.type==='required'?'campo requerido': ventana}
        </p>


        {errors.exampleRequired && <span>llene todos los campos</span>}

      <Button  style={{
        display: 'block',
        marginRight:'auto',
        marginLeft:'auto',
        placeItems: 'center',
        color: 'cyan'}}
        htmlType="onSubmit">Submit</Button>
    </form>

</div>
);
}