import { client } from "../lib/sanity";
import { simplifiedProduct } from "../interface";

async function getData() {
  const query = `* [_type == 'product'][0...4] | order(_createdAt asc){
    _id,
      price,
      name,
      "slug":slug.current,
      "categoryName":category->name,
      "imageUrl":images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Footer() {
  // const data: simplifiedProduct[] = await getData();

  return (
    <footer className="page-footer" id="page-footer">
      <div className="m-auto bg-gray-100">
        <div className="max-w-screen-desktop mx-auto px-4 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="max-w-[438px] mx-auto flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-950 mb-4">Newsletter!</h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              Sign up for La Molina&apos; newsletter to learn about the latest
              products, promotions and exclusive offers.
            </p>
          </div>
          <div className="max-w-[438px] mx-auto flex flex-col items-center justify-center">
            <form
              className="w-full flex flex-col items-center justify-center mb-4"
              action="#page-footer"
              method="POST"
              id="newsletter-validate-detail"
            >
              <div className="w-full flex flex-col sm:flex-row justify-center gap-4">
                <div className="footer-nl-inputs w-full">
                  <input
                    name="email"
                    type="email"
                    id="newsletter-subscribe"
                    className="form-input border-gray-300 text-center lg:text-left placeholder-gray-400 rounded-lg p-4 w-full"
                    placeholder="Enter E-Mail"
                  ></input>
                </div>
                <button className="bg-primary text-red-50 items-center p-4 w-auto sm:max-w-[131px] max-h-14 rounded-lg">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-gray-500">
              By subscribing, you consent to receiving personalized
              communications from us and agree to La Monila&apos;{" "}
              <a href="#" className="underline" target="_blank">
                Privacy Policy.
              </a>
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <div className="footer content">
        <div className="container p-0 md:p-8 mx-auto max-w-screen-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="social-links flex flex-col">
              <div className="md:text-lg mb-4 font-semibold hidden md:block">
                Get in Touch
              </div>
              <ul>
                <li className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900">
                  <a
                    className="md:text-sm flex items-center gap-2"
                    href="#"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </li>
                <li className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900">
                  <a
                    className="md:text-sm flex items-center gap-2"
                    href="#"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900">
                  <a
                    className="md:text-sm flex items-center gap-2"
                    href="#"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full h-full items-center justify-center ">
              <div className="items-center justify-center rounded-lg">
                <img
                  src="logo.png"
                  alt="logo"
                  className="max-w:md max-md:w-full object-cover object-center"
                  width={200}
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-lg mb-4 font-semibold hidden md:block">
                Legal
              </div>
              <div className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900 hidden md:block">
                <a className="md:text-sm flex gap-2" href="#" target="_blank">
                  Privacy Policy
                </a>
              </div>
              <div className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900 hidden md:block">
                <a className="md:text-sm flex gap-2" href="#" target="_blank">
                  Terms and Conditions
                </a>
              </div>
              <div className="text-lg md:text-md p-4 md:p-0 md:mb-2 border-t md:border-none border-gray-900 hidden md:block">
                <a className="md:text-sm flex gap-2" href="#" target="_blank">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto bg-gray-900">
        <div className="max-w-screen-desktop mx-auto p-6 sm:px-4  lg:px-8 items-center">
          <div className="text-sm items-center text-gray-200">
            Copyright © 2024 La Molina (UAE)
          </div>
        </div>
      </div>
    </footer>
  );
}
