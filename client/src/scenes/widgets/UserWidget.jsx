import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOUtlined,
  WorkOutlineOutlined,

} from "@mui/icons-material"
import { Box, Typography, Divider, useTheme } from "@mui/material"
import UserImage from "components/userImageWidget"
import FlexBetween from "components/FlexBetween"
import WidgetWrapper from "components/WidgetWrapper"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const userWidget = ({userId, picturePath}) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const toekn = useSelector((state) => state.token)
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  
}