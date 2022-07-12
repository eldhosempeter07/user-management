import { Dispatch, SetStateAction } from "react";

export type UserList = {
  name: string;
  statusMessage: boolean;
  createdAt: string;
  id: number;
  avatarUrl: string;
}[];

export type UserItem = {
  avatarUrl: string;
  statusMessage: string;
  name: string;
  email: string;
  age: string;
  isPublic: string;
  createdAt: Date;
};

export type UsersProps = {
  UserReducer: {
    loading: boolean;
    user: {
      avatarUrl: string;
      statusMessage: string;
      name: string;
      email: string;
      age: string;
      isPublic: string;
      createdAt: Date;
    };
    userList: {
      name: string;
      statusMessage: boolean;
      createdAt: string;
      id: number;
      avatarUrl: string;
    }[];
    userCount: number;
    error: string;
  };
};

export interface getUser {
  data: {
    id: string;
  };
}

export interface getRequest {
  data: {
    _order: string;
    _limit: number;
    name_like?: string;
    _sort: string;
    _page: number;
  };
}

export interface AddUserProps {
  data: {
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    avatar: string;
  };
  callback: () => void;
}

export interface getUser {
  data: {
    id: string;
  };
}

export interface deleteUserProps {
  id: string;
  callback: () => void;
}

export interface updateUserProps {
  data: {
    avatarUrl: string;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt: Date;
    id: string;
  };
  id: string;
  callback: () => void;
}

export interface GetUsersProps {
  headers: {
    "x-total-count": number;
  };
  data: {
    avatarUrl: string;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt: Date;
    id: string;
  }[];
}

export interface GetUserByIdProps {
  data: {
    avatarUrl: string;
    statusMessage: string;
    name: string;
    email: string;
    age: string;
    isPublic: string;
    createdAt: Date;
    id: string;
  };
}

export interface RequestProps {
  _order: string;
  _limit: number;
  name_like: string;
  _sort: string;
  _page: number;
}

export interface PaginationProps {
  totalRecords: number;
  request: RequestProps;
  setRequest: Dispatch<SetStateAction<RequestProps>>;
}

export type modalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
};

export interface formProps {
  type: string;
}

export interface UserProps {
  type: string;
  payload?: {
    data: {};
    headers: {
      "x-total-count": number;
    };
  };
}
