import { Skeleton } from "@mui/material";
import s from "./PostsSkeleton.module.scss";
const PostsSkeleton = () => {
  return (
    <>
      <div className={s.skeletonContainer}>
        <Skeleton sx={{ maxWidth: 700, width: "auto" }} />
        <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
      </div>
      <div className={s.skeletonContainer}>
        <Skeleton sx={{ maxWidth: 700 }} />
        <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
      </div>
      <div className={s.skeletonContainer}>
        <Skeleton sx={{ maxWidth: 700 }} />
        <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
      </div>
      <div className={s.skeletonContainer}>
        <Skeleton sx={{ maxWidth: 700 }} />
        <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
      </div>
      <div className={s.skeletonContainer}>
        <Skeleton sx={{ maxWidth: 700 }} />
        <Skeleton sx={{ maxWidth: 700 }} height={150} variant="rounded" />
      </div>
    </>
  );
};

export default PostsSkeleton;
