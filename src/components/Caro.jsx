import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Box } from "@mui/material";

const Caro = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      speed={1000}
      loop={false}
      pagination={{ clickable: true }}
      autoplay={true}
      style={{
        height: "250px",
        boxShadow: "0 5px 5px #566572",
        borderRadius: "5px",
      }}
    >
      <SwiperSlide>
        <Box>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            style={{ width: "100%", height: "250px", borderRadius: "5px" }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ objectFit: "cover", objectPosition: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
            style={{ width: "100%", height: "270px", borderRadius: "5px" }}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ objectFit: "cover", objectPosition: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            style={{ width: "100%", height: "270px", borderRadius: "5px" }}
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Caro;
