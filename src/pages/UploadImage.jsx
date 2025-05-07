
import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import SelectField from '../components/SelectField'
import SwitchButton from '../components/Switch'
import ImageUploadButton from '../components/ImageUploadButton'
import TagInput from '../components/TagInput'
import SubmitButton from '../components/SubmitButton'
import axios from 'axios'
import toast from 'react-hot-toast'
import { international, indian } from '../../consts/categories'

const UploadImage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [oldPrice, setOldPrice] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [isFeatured, setIsFeatured] = useState(false)
    const [files, setFiles] = useState([])
    const [tags, setTags] = useState([])

    const [isLoading, setIsLoading] = useState(false)
    const [responseData, setResponseData] = useState({})
    const [buttonDisable, setButtonDisable] = useState(true)

    const onSubmit = async() => {
      setIsLoading(true)
      const data = new FormData()
      data.append('title', title)
      data.append('description', description)
      data.append('oldPrice', oldPrice)
      data.append('price', price)
      data.append('category', category)
      data.append('subCategory', subCategory)
      data.append('isFeatured', isFeatured)
      data.append('tags', tags)

      files.forEach(file => data.append('files', file));
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/upload`, data)
        setResponseData(res)
      } catch (error) {
        setIsLoading(false)
        toast.error(error.message || 'Something went wrong')
      }
    }
    useEffect(() => {
      if (responseData.status === 201) {
        setIsLoading(false)
        toast.success(responseData?.data.message || 'Image uploaded successfully')
      }
    }, [responseData])

    useEffect(() => {
      if (title && description && oldPrice && price && category && subCategory && files.length > 0) {
        setButtonDisable(false)
      } else {
        setButtonDisable(true)
      }
    }, [title, description, oldPrice, price, category, subCategory, isFeatured, tags, files])

  return (
    <div className='w-full py-4 px-5 '>
       <div className='flex gap-5 mt-5'>
       <Input name={'title'} value={title} onChange={(e) => setTitle(e.target.value)}/>
       <Input name={'description'} value={description} onChange={(e) => setDescription(e.target.value)}/>
       </div>
       <div className='flex gap-5 my-8'>
       <Input name={'oldPrice'} type='number' value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}/>
       <Input name={'price'} type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
       </div>
       <div className='flex gap-5 mb-8'>
       <SelectField value={category} label={'Category'} handleChange={(e) => setCategory(e.target.value)} disabledValue={'Category'} menuItem={['Indian', 'International']}/>
       <SelectField value={subCategory} label={'Sub category'} handleChange={(e) => setSubCategory(e.target.value)} disabledValue={'Sub category'} menuItem={category === 'Indian' ? indian : international}/>
        <SwitchButton name={'isFeatured'} labelText={'isFeatured'} value={isFeatured} handleChange={(e) => setIsFeatured(e.target.checked)}/>
       </div>
       <div className='flex gap-5'>
       <TagInput tags={tags} handleChange={(tag)=> setTags(tag)}/>
       </div>
       <div className='flex my-8 justify-center gap-20 items-center'>
        <ImageUploadButton setFiles={setFiles}/>
       <SubmitButton text={'Submit'} onClick={onSubmit} isLoading={isLoading} isDisabled={buttonDisable}/>
       </div>
    </div>
  )
}

export default UploadImage
