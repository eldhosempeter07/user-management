export type UsersProps = {
  loading: boolean;
  user: {
    avatarUrl: string ;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt:Date
  };
  userList: {
    name: string;
    statusMessage: boolean;
    createdAt: string;
    id: number;
    avatarUrl:string
  }[];
  error: string;
};

export  interface getUser{
  data:{
      id:string        
  }
 
}

export  interface getRequest{
  data:{
    _order:string,
    _limit:number
    name_like?:string,
    _sort:string
    
  }
}
  

export interface AddUserProps{
  data:{
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    avatar:string
  },
  callback:()=>void
}

export  interface getUser{
  data:{
      id:string        
  }
}

export interface deleteUserProps {
  id:string,
  callback:()=>void
 }


 export interface updateUserProps{
  data:{
    avatarUrl: string ;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt:Date;
    id:string
  },
  id:string,
  callback:()=>void

}

export interface GetUsersProps{
  data:{
    avatarUrl: string ;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt:Date;
    id:string
  }[],
}

export interface GetUserByIdProps{
  data:{    
    avatarUrl: string ;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt:Date;
    id:string
  },
}