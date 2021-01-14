import React from "react";
import Testimonial_LargeAvatar from "../../components/TestimonialSections/LargeAvatar";
import Testimonial_SideBySide from "../../components/TestimonialSections/SideBySide";
import Testimonial_SimpleCentered from "../../components/TestimonialSections/SimpleCentered";

export default {
	title: "Components/Testimonials",
};

export const LargeAvatar = () => {
	return <Testimonial_LargeAvatar />;
};

export const SideBySide = () => {
	return <Testimonial_SideBySide />;
};

export const SimpleCentered = () => {
	return <Testimonial_SimpleCentered />;
};
