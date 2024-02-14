import { useAppSelector } from "@/redux/hooks";
import Link from "next/link"
import { useParams } from "next/navigation";


const Footer = () => {
  const categories = useAppSelector((state) => state.ecomm.categories);
  const { storeId } = useParams();
  const socialLinks = [
    {
      href: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
      title: 'LinkedIn'
    },
    {
      href: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
      title: 'Instagram'
    },
    {
      href: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
      title: 'Facebook'
    },
    {
      href: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
      title: 'Twitter'
    }
  ];
  const aboutLinks = [
    {
      href: `/${storeId}`,
      title: 'About Us'
    },
    {
      href: `/${storeId}`,
      title: 'Contact Us'
    },
    {
      href: `/${storeId}`,
      title: 'Careers'
    },
  ];

  return (
    <main className="border py-10 flex flex-col gap-10 mt-10">
      <div className="flex gap-10 lg:gap-24 md:gap-20 justify-center ">
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Get to Know Us</h1>
          <ul className="space-y-2">
            {
              aboutLinks.map((link) => (
                <li>
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
              socialLinks.map((link) => (
                <li >
                  <a href={link.href} target="blank">
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <ul className="space-y-2">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            {
              categories && categories?.map((category) => (
                <li key={category.id} >
                  <Link href={`/${storeId}/category/${category.id}`}>
                    {category.name}
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