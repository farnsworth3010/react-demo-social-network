export interface IPost {
  id: string;
  title: string;
  text: string;
  creation_date: Date | null;
}

export type INewPost = Omit<IPost, "id">;
