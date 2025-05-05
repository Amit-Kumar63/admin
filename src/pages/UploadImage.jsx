
import React, { useState } from 'react'
import Input from '../components/Input'
import SelectField from '../components/SelectField'
import SwitchButton from '../components/Switch'

const UploadImage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [oldPrice, setOldPrice] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [isFeature, setIsFeature] = useState(false)

  return (
    <div className='w-full py-4 px-5'>
       <div className='flex gap-3'>
       <Input name={'title'} value={title} onChange={(e) => setTitle(e.target.value)}/>
       <Input name={'description'} value={description} onChange={(e) => setDescription(e.target.value)}/>
       </div>
       <div className='flex gap-3 my-5'>
       <Input name={'oldPrice'} type='number' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}/>
       <Input name={'price'} type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
       </div>
       <div className='flex gap-3 mb-5'>
       <SelectField value={category} label={'Category'} handleChange={(e) => setCategory(e.target.value)} disabledValue={'Category'} menuItem={['Indian', 'International']}/>
       <SelectField value={subCategory} label={'Sub category'} handleChange={(e) => setSubCategory(e.target.value)} disabledValue={'Sub category'} menuItem={['Holi', 'Diwali']}/>
        <SwitchButton name={'isFeature'} labelText={'isFeature'} value={isFeature} handleChange={(e) => setIsFeature(e.target.checked)}/>
       </div>
    </div>
  )
}

export default UploadImage
