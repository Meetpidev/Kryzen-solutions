const styles = {
  container: {
    padding: '2rem',
    background: '#f8fafc',
    fontFamily: 'sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subheading: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: '2rem',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '230px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.11rem',
    marginBottom: '0.5rem',
  },
  desc: {
    color: '#555',
    flexGrow: 1,
    fontSize: '0.98rem',
    marginBottom: '1.5rem',
  },
  button: {
    background: '#1966d2',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    transition: 'background 0.2s',
  }
};

const services = [
  {
    title: "Web Development",
    desc: "We build beautiful, responsive, and high-performance websites. From corporate sites and portfolios to complex e-commerce platforms and custom web applications, we create digital storefronts that engage users and drive conversions.",
  },
  {
    title: "Mobile App Development",
    desc: "We specialize in creating intuitive and powerful native (iOS, Android) and hybrid mobile applications. Our focus is on seamless user experience (UI/UX) and robust functionality to keep your audience connected on the go.",
  },
  {
    title: "Custom Software Development",
    desc: "We engineer tailor-made software solutions, including SaaS products, enterprise applications, and automation tools, designed to streamline your operations, improve productivity, and provide a competitive edge.",
  },
  {
    title: "Graphics & UI/UX Design",
    desc: "Our creative team crafts compelling visual identities, including logos, branding, and marketing collateral. We specialize in UI/UX design that ensures your digital products are not only stunning but also user-friendly and effective.",
  },
  {
    title: "Digital Marketing",
    desc: "We help you grow your online presence and reach your target audience through data-driven digital marketing strategies, including Search Engine Optimization (SEO), Social Media Marketing (SMM), Pay-Per-Click (PPC) campaigns, and content strategy.",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "We implement, customize, and integrate Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems to help you manage your resources, optimize workflows, and build stronger customer relationships.",
  },
  {
    title: "Domain & Hosting",
    desc: "We provide reliable, secure, and scalable domain registration and web hosting solutions, ensuring your digital assets are always online and performing at their peak.",
  },
  {
    title: "AI Animations & Automation",
    desc: "AI Animations & Automation uses advanced AI to create dynamic, high-quality animations quickly and efficiently. It automates complex tasks, delivering innovative visuals that enhance storytelling and engagement.",
  },
];

const Services = () => (
  <div style={styles.container}>
    <div style={styles.heading}>Our Services</div>
    <div style={styles.subheading}>
      We offer a comprehensive suite of services designed to cover every aspect of your digital journey from concept to launch and beyond.
    </div>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {services.map((service, idx) => (
        <div key={idx} className="bg-white p-6 shadow-md flex flex-col justify-between min-h-[230px] text-justify border-b-4 border-transparent hover:border-red-500 transition-colors">
          <div className="font-bold text-xl mb-2">{service.title}</div>
          <div className="text-gray-600 mb-6 flex-grow text-sm">{service.desc}</div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Explore Service &rarr;
          </button>
          <div
            className="absolute bottom-0 left-0 h-1 bg-red-500 w-0 group-hover:w-full transition-[2rem] duration-800 ease-in-out"
          />
        </div>
      ))}
    </div>

  </div>
);

export default Services;
