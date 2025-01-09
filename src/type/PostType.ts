export type PostType = {
  post: {
    id: string;
    image: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
    media_type: "image" | "video";
    my_likes: any[];
    likes: any[];
  };
};
