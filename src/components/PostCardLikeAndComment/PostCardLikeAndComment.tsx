import { FC } from "react";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import PostCardCommentBtn from "../PostCardCommentBtn/PostCardCommentBtn";

export interface PostCardLikeAndCommentProps {
  className?: string;
  itemClass?: string;
  hiddenCommentOnMobile?: boolean;
  useOnSinglePage?: boolean;
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  hiddenCommentOnMobile = true,
  useOnSinglePage = false,
}) => {
  return (
    <div
      className={`nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse ${className}`}
    >
      <PostCardLikeAction className={itemClass} />
      <PostCardCommentBtn
        className={`${
          hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
        }  ${itemClass}`}
        isATagOnSingle={useOnSinglePage}
      />
    </div>
  );
};

export default PostCardLikeAndComment;
