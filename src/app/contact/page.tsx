import Image from "next/image";
import seminYellow1 from '../../../public/semin_yellow_1.jpg'
import style from '../page.module.css';
import { Box, Typography } from "@mui/material";

export default function Contact() {
    return (
        <Box className={style.main}>
            <Typography variant="h5">Contact Page</Typography>
            <Image src={seminYellow1} alt={"semin_yellow"} width={800} />
            <Typography variant="h5">Contact Page</Typography>
            <Image src={seminYellow1} alt={"semin_yellow"} width={800} />
            <Typography variant="h5">Contact Page</Typography>
            <Image src={seminYellow1} alt={"semin_yellow"} width={800} />
            <Typography variant="h5">Contact Page</Typography>
            <Image src={seminYellow1} alt={"semin_yellow"} width={800} />
            <Typography variant="h5">Contact Page</Typography>
            <Image src={seminYellow1} alt={"semin_yellow"} width={800} />
        </Box>
    );
}