import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wrapper,
  Movies,
  Ul,
  Li,
  StyledLink,
  Img,
  Title,
  Thumb,
  Arrow,
  LeftArrow,
  RightArrow,
} from './MovieSlider.styled';
import noImage from '../../NoImage.jpg';

const MovieSlider = ({ movies = [] }) => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideWidth = 200; // Ширина каждого слайда (в пикселях)
  const slideCount = movies.length; // Общее количество слайдов
  const emptySlideOffset = 100; // Отступ для пустого слайда (в пикселях)

  const duplicatedMovies = [...movies, ...movies];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideCount]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      sliderRef.current.style.transition = 'transform 1s ease-in-out';

      if (currentSlide === slideCount) {
        setTimeout(() => {
          sliderRef.current.style.transition = 'none';
          setCurrentSlide(0);
          sliderRef.current.style.transform = `translateX(-${emptySlideOffset}px)`;
          setTimeout(() => {
            sliderRef.current.style.transition = 'transform 1s ease-in-out';
          }, 0);
        }, 1000);
      }
    }
  }, [currentSlide, slideCount, slideWidth, emptySlideOffset]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  return (
    <Wrapper>
      <Movies>
        <Arrow onClick={handlePrevSlide} left>
          <LeftArrow />
        </Arrow>
        <Ul ref={sliderRef}>
          {duplicatedMovies.map((movie, index) => (
            <Li key={`${movie.id}_${index}`}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <Thumb>
                  {movie.poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt="preview"
                    />
                  ) : (
                    <Img src={noImage} alt="No Image Available" />
                  )}
                </Thumb>
                {(movie.title || movie.name) && (
                  <Title>{movie.title || movie.name}</Title>
                )}
              </StyledLink>
            </Li>
          ))}
        </Ul>
        <Arrow onClick={handleNextSlide} right>
          <RightArrow />
        </Arrow>
      </Movies>
    </Wrapper>
  );
};

export default MovieSlider;
