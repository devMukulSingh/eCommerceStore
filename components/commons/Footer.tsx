import Link from "next/link"


const Footer = () => {
  const socialLinks = [
    {
      href:"www.linkedin.com/in/mukul-singh-bisht-36a80428b",
      title:'LinkedIn'
    },
    {
      href:"www.linkedin.com/in/mukul-singh-bisht-36a80428b",
      title:'Instagram'
    },
    {
      href:"www.linkedin.com/in/mukul-singh-bisht-36a80428b",
      title:'Facebook'
    },
    {
      href:"www.linkedin.com/in/mukul-singh-bisht-36a80428b",
      title:'Twitter'
    }
  ];
  const aboutLinks = [
    {
      href:"/",
      title:'About Us'
    },
    {
      href:"/",
      title:'Contact Us'
    },
    {
      href:"/",
      title:'LinkedIn'
    },
  ];
  const quickLinks = [
    {
      href:"/",
      title:"Home"
    },
    {
      href:"/",
      title:'Flagship Smartphones'
    },
    {
      href:"/",
      title:'Mid range Smartphones'
    },
    {
      href:"/",
      title:'Budget Smartphones'
    },
  ]
return (
  <main className="border py-10 flex flex-col gap-10 mt-10">
    <div className="flex gap-10 lg:gap-24 md:gap-20 justify-center ">
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Get to Know Us</h1>
          <ul className="space-y-2">
          {
            aboutLinks.map( (link) => (
              <li >
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
        </section>
        <section className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Connect with Us</h1>
        <ul className="space-y-2">
          {
            socialLinks.map( (link) => (
              <li >
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-2">
          {
            quickLinks.map( (link) => (
              <li >
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
        </section>
    </div>
        <h1 className="text-center">
          © 1996-2024, mStore.com, Inc. or its affiliates
        </h1>
    </main>
  )
}

export default Footer