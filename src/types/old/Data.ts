export interface ICategory {
  id: string
  name: string
}
export interface IProduct {
  id: string
  name: string
  img: string
  type: string
}

export interface IProductInfo extends IProduct {
  description: string
  bulletInfo: string[]
  // specification: IProductSpec[]
  fileList: IFile[]
  specImg: string[]
}

interface IFile {
  name: string
  link: string
}

interface IProductSpec {
  specfication: string
  value: string
}
