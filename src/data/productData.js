// src/data/products.js
import RAD from "/Assets/GRAD.svg";
import delphi from "/Assets/image5.svg";
import imgInterBase from "/Assets/image.svg";
import imgRADServer from "/Assets/image4.svg";
import CBuilder from "/Assets/image2.svg";
import logo1 from "/Assets/image20.svg";
import logo2 from "/Assets/image23.svg";
import logo3 from "/Assets/image21.svg";
import logo4 from "/Assets/image19.svg";
import logo5 from "/Assets/RAD.svg";

export const productData = [

  {
    id: 'RAD',
    logo: logo5,
    title: "RAD Studio",
    subtitle: "11.2",
    description:
      "RAD Studio® is the ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11.",
    image: RAD,
    imageClass: "min-w-[343px] max-h-[285px] sm:max-w-[561px] sm:min-w-[561px] sm:min-h-[458px] sm:max-h-[468px] md:min-w-[300px]  md:min-h-[411px] xl:mr-15 2xl:mx-auto lg:min-w-[500px] lg:min-h-[500px] xl:min-w-[613px] xl:max-h-[511px] 2xl:min-w-[661px] 2xl:min-h-[550px] object-contain",
    blurColor: "bg-rose-600 opacity-20",
    blurStyles: {
        width: '309px',
        height: '750px',
        top: '280px',
        right: '-32rem',
        transform: 'translateY(-50%)',
        '@media (min-width: 320px)': {
          width: '309px',
          height: '609px',
          right: '-4rem'
        },
        '@media (min-width: 640px)': {
          width: '869px',
          height: '759px',
          right: '-35rem',
          top: '280px'
        },
        '@media (min-width: 768px)': {
          width: '869px',
          height: '569px',
          right: '-36rem',
          top: '285px'
        },
        '@media (min-width: 1024px)': {
          width: '869px',
          height: '509px',
          right: '-35rem',
          top: '300px'
        },
        '@media (min-width: 1280px)': {
          width: '869px',
          height: '759px',
          right: '-32rem',
          top: '420px'
        },
        '@media (min-width: 1536px)': {
          width: '869px',
          height: '789px',
          right: '-36rem',
          top: '415px'
        },
        borderRadius: '3px',
        zIndex: -2,
        backgroundColor: 'rgb(244, 63, 94)',
        filter: 'blur(210px)',},

     blurColor2: "bg-indigo-600 opacity-30",
    blurStyles2: 
    {
      width: '440px',
      height: '500px',
      left: '-322px',
      top: '400px',
      '@media (min-width: 320px)': {
        width: '300px',
        height: '500px',
        left: '-80px',
        top: '380px'
      },
      '@media (min-width: 640px)': {
        width: '360px',
        height: '560px',
        left: '-100px',
        top: '350px'
      },
      '@media (min-width: 768px)': {
        width: '400px',
        height: '400px',
        left: '-15px',
        top: '248px'
      },
      '@media (min-width: 1024px)': {
        width: '440px',
        height: '440px',
        left: '-70px',
        top: '260px'
      },
      '@media (min-width: 1280px)': {
        left: '-130px',
        top: '335px'
      },
      '@media (min-width: 1536px)': {
        width: '500px',
        height: '520px',
        left: '-330px',
        top: '360px'
      },
      borderRadius: '4px',
      transform: 'translateY(-50%)',
      filter: 'blur(450px)'    }  ,
  },

  {
    id: 'Delphi',
    logo: logo4,
    title: "Delphi",
    subtitle: "11.2",
    description:
      "Delphi® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.",
    image: delphi,
    imageClass: "max-w-[343px] max-h-[354px] sm:min-w-[564px] sm:max-w-[564px] sm:min-h-[524px] md:max-w-[320px]    md:min-h-[524px] xl:mr-15 2xl:mx-auto    lg:min-w-[506px] lg:min-h-[524px]   object-contain",
    blurColor: "bg-cyan-500 opacity-20",
    blurStyles: {
      width: '906px',
      height: '656px',
      left: '-680px',
      bottom: '-30px',
      '@media (min-width: 640px)': {
        left: '-550px',
        bottom: '-250px',
        height: '850px'
      },
      '@media (min-width: 768px)': {
        left: '-550px',
        bottom: '-350px',
        height: '700px'
      },
      '@media (min-width: 1024px)': {
        left: '-440px',
        bottom: '-420px',
        height: '730px'
      },
      '@media (min-width: 1280px)': {
        left: '-600px',
        bottom: '-440px',
        height: '800px'
      },
      '@media (min-width: 1536px)': {
        left: '-500px',
        bottom: '-510px'
      },

      filter: 'blur(550px)'
    },
    
  },

  {
    id: 'CBuilder',
    logo: logo2,
    title: "C++ Builder",
    subtitle: "11.2",
    description:
      "C++ Builder® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.",
    image: CBuilder,
    imageClass: "min-w-[341px] max-w-[3px] max-h-[189px] sm:min-w-[564px] sm:max-w-[564px] sm:min-h-[313px] sm:max-h-[313px] md:min-w-[300px] md:min-h-[411px] lg:min-w-[500px] lg:min-h-[500px] xl:min-w-[596px] xl:min-h-[369px] xl:max-w-[609px] xl:max-h-[369px] xl:mr-10 2xl:min-w-[606px] 2xl:min-h-[369px] 2xl:mr-[150px] object-contain",
    blurColor: "bg-indigo-500 opacity-10",
    blurStyles: {
      width: '644px',
      height: '544px',
      right: '-350px',
      bottom: '250px',
      '@media (min-width: 640px)': {
        right: '-330px',
        bottom: '200px'
      },
      '@media (min-width: 768px)': {
        right: '-380px',
        bottom: '50px',
        height: '560px'
      },
      '@media (min-width: 1024px)': {
        right: '-350px',
        bottom: '140px',
        height: '560px'
      },
      '@media (min-width: 1280px)': {
        right: '-440px',
        bottom: '130px',
        height: '660px'
      },
      '@media (min-width: 1536px)': {
        right: '-630px',
        bottom: '50px',
        height: '684px'
      },
      filter: 'blur(300px)',
    },
  },
  
  {
    id: "interbase",
    logo: logo1,
    title: "InterBase 2020",
    subtitle: "Update 3",
    description:
      "InterBase® is a full-featured, encryptable, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security, disaster recovery and change synchronization.",
    image: imgInterBase,
    imageClass: "max-w-[342px] min-h-[256px] max-h-[354px] sm:max-w-[564px] sm:min-h-[421px] sm:max-h-[421px] md:min-w-[300px] md:min-h-[411px] xl:mr-15 2xl:mx-auto  lg:min-w-[500px] lg:min-h-[499px] xl:max-w-[667px] xl:max-h-[499px] 2xl:min-w-[797px] 2xl:min-h-[596px] object-contain",
    blurColor: "bg-rose-600 opacity-20",
    blurStyles: {
      width: '35rem',
      height: '35rem',
      right: '-22rem',
      top: '26rem',
      transform: 'translateY(-50%)',
      '@media (min-width: 640px)': {
        top: '26rem'
      },
      borderRadius: '40px',
      filter: 'blur(300px)'
    },
  },
  {
    id: "radserver",
    logo: logo3,
    title: "RAD Server",
    subtitle: "",
    description:
      "Enterprise-grade REST API application platform available as on-premise or deployable to the cloud. Generate database APIs instantly in Delphi® and C++Builder® to build apps faster.",
    image: imgRADServer,
    imageClass: "min-w-[343px] max-w-[363px] max-h-[160px] sm:min-w-[564px] sm:min-h-[284px] md:min-w-[300px] md:mx-auto  md:max-w-[400px] md:min-h-[411px] xl:mr-15 2xl:mx-auto  lg:min-w-[500px] lg:min-h-[500px] xl:min-w-[624px] xl:min-h-[263px] 2xl:min-w-[692px] 2xl:min-h-[292px]   object-contain",
    blurColor: "bg-indigo-500/15",
    blurStyles: {
      width: '678px',
      height: '878px',
      left: '-420px',
      top: '180px',
      transform: 'translateY(-50%)',
      '@media (min-width: 640px)': {
        left: '-320px',
        top: '120px',
        height: '878px',
      },
      '@media (min-width: 768px)': {
        left: '-380px',
        top: '280px',
        height: '420px'
      },
      '@media (min-width: 1024px)': {
        left: '-320px',
        top: '280px',
        height: '448px'
      },
      '@media (min-width: 1280px)': {
        left: '-220px',
        top: '335px',
        height: '678px'
      },
      '@media (min-width: 1536px)': {
        left: '-338px',
        top: '335px',
        height: '678px'
      },
      filter: 'blur(500px)'
    },
  },
];
