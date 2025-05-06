import React from 'react';
import { Select } from 'antd';

const TagInput = ({handleChange, tags}) => {

return(
    <div className='w-full'>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
  <Select
    mode="tags"
    style={{ width: '100%'}}
    placeholder="Tags"
    onChange={handleChange}
    open={false}
    value={tags}
  />
  </div>
)
};
export default TagInput;