import AuthForm1 from "../components/authForms/AuthForm1";
import Testimonials1 from "../components/testimonials/Testimonials1";

export default function TestPage() {
  const testimonials = [
    {
      profileimg:
        "https://images.unsplash.com/photo-1723200166097-4eed8c141f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      userName: "Alice Johnson",
      testimonial:
        "Using this tool has drastically improved our team's efficiency. The UI is sleek, and the features are intuitive.",
      companyName: "Tech Innovations",
      designation: "Lead Developer",
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {testimonials.map((testimonial, index) => (
        <Testimonials1
          key={index}
          profileimg={testimonial.profileimg}
          userName={testimonial.userName}
          testimonial={testimonial.testimonial}
          companyName={testimonial.companyName}
          designation={testimonial.designation}
        />
      ))}
    </div>
  );
}
