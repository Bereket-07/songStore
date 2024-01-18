import _ from 'lodash';

export const paginate =(items,currentPage,pageSize)=>{
    const firstIndex = (currentPage-1)*pageSize;
    return _(items).slice(firstIndex).take(pageSize).value();  
}