import { selectCommentOrder, setCommentOrder } from '@/redux/slices/orderSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { IconButton, TextField } from "@mui/material";
import s from './Modal.module.scss'
import ClearIcon from "@mui/icons-material/Clear";

export default function CommentModal() {

    const dispatch = useAppDispatch();
    const commentOrder = useAppSelector(selectCommentOrder);

  return (
    <div className={s.bodyModal_comment}>
      <TextField 
          id="standard-basic" 
          variant="standard"
          label="Оставьте комментарий"
          value={commentOrder}
          onChange={e => dispatch(setCommentOrder(e.target.value))}
          className={s.bodyModal_comment_input}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "grey" },
            "& .MuiInput-underline:after": { borderBottomColor: "var(--baseColorText)" },
            "& .MuiInputLabel-root": { color: "var(--baseColorText)" },
            "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
          }}
      />
      <IconButton onClick={() => dispatch(setCommentOrder(""))}>
        <ClearIcon sx={{color: 'var(--baseColorText)'}}/>
      </IconButton>
    </div>
  )
}
