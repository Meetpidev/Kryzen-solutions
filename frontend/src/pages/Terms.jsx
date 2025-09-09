import { CTASubscribe, CTAWorkTogether } from '../components/FeaturedLogos'

function Terms() {
  return (
    <>
      <section className="bg-blue-50 mt-31 md:mt-30">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/2 py-30">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Terms & Conditions</h2>
            <p className="text-gray-700 mb-6 text-justify text-[1.145rem]">
              Kryzen is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-md font-semibold flex items-center gap-2 transition">
              Get In Touch <span className="ml-2">&#8594;</span>
            </button>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-200 rounded-full -z-10" />
              <img
                src=""
                alt="Privacy"
                className="w-76 h-76 rounded-xl object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white p-8 text-1xl max-w-6xl mx-auto text-gray-900 leading-relaxed">
        <h2 className="text-lg font-bold mb-1">Notice</h2>
        <p className="mb-5">
          Please read these Terms of Use carefully. By accessing this website and its pages, you agree to be bound by these Terms of Use, as they may be modified from time to time and posted on this site by Kryzen Software Solutions.
        </p>

        <h2 className="text-lg font-bold mb-1">Copyright © Kryzen Software Solutions. 2024</h2>
        <p className="mb-2">
          This site is owned by Kryzen Software Solutions. All content present on this Site is the exclusive property of Kryzen Software Solutions including all the software, text, images, graphics and video used on this Site. Certain screen layouts and graphics contained in this Site that are not owned by Kryzen Software Solutions are exclusively licensed to Kryzen Software Solutions.
        </p>
        <p className="mb-2">
          No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from Kryzen Software Solutions.
        </p>
        <p className="font-semibold mb-5">
          Unauthorized use of the materials appearing on this Site may violate copyright, trademark and other applicable laws.
        </p>

        <h2 className="text-lg font-bold mb-1">Use Of Information</h2>
        <p className="mb-5">
          The information provided on this site is free of charge and is for informational purposes only. The content in this Site, including the terms, conditions and descriptions herein, are subject to change without prior notice to you. Unauthorized use of, or entry into this Site, or the misuse of information contained within this Site, is strictly prohibited.
        </p>

        <h2 className="text-lg font-bold mb-1">Links To Other Sites</h2>
        <p className="mb-5">
          Kryzen Software Solutions may include links and pointers to websites maintained by third parties. Access to these links is at your sole discretion. Establishment of any link does not imply endorsement or recommendation by Kryzen Software Solutions of any opinions, ideas, goods, products, information or services offered through such linked websites.
          <br />
          Any use you make of information provided on this site, or any site or service linked to by this site, is at your own risk. Kryzen Software Solutions has no control over such third-party websites and makes no warranties or representations regarding their content or the goods, products, or services offered through them.
        </p>

        <h2 className="text-lg font-bold mb-1">Disclaimer Of Warranties</h2>
        <p className="mb-5">
          The information contained in the site has been obtained from sources believed to be reliable. The site, along with all content, materials, information, software, products and services provided on the site, are provided on an "as is" and "as available" basis.
          <br />
          Kryzen Software Solutions makes no warranties—express or implied—including, without limitation, those of merchantability, fitness for a particular purpose, or non-infringement, with respect to any information, data, statements or products made available on the site. Kryzen Software Solutions disclaims all warranties as to the accuracy, completeness or adequacy of such information.
        </p>

        <h2 className="text-lg font-bold mb-1">Limitation Of Liability</h2>
        <p className="mb-5">
          Kryzen Software Solutions shall have no responsibility for any damage to your computer system or loss of data resulting from the download of any content, materials, or information from the site.
          <br />
          Kryzen Software Solutions will not be liable for damages of any kind—including, without limitation, direct, incidental or consequential damages (such as lost profits, business interruption, or loss of programs or information)—arising out of the use of or inability to use the site or any information provided on the site, for any reason whatsoever.
        </p>

        <h2 className="text-lg font-bold mb-1">Indemnification</h2>
        <p className="mb-5">
          You agree to indemnify, defend and hold Kryzen Software Solutions harmless from and against all losses, expenses, damages and costs, including reasonable attorneys’ fees, arising out of or relating to any misuse by you of the content and services provided on the site.
        </p>

        <h2 className="text-lg font-bold mb-1">Right To Modify Or Terminate</h2>
        <p className="mb-5">
          Kryzen Software Solutions reserves the right to modify the services offered on the site. Kryzen Software Solutions also reserves the right to terminate your access to such products and services, or access to this site, in whole or in part, at any time.
        </p>

        <h2 className="text-lg font-bold mb-1">Governing Law And Jurisdiction</h2>
        <p>
          If you attempt to bring any legal proceedings against Kryzen Software Solutions, you acknowledge that Kryzen Software Solutions is free to choose the jurisdiction of its preference as to where such action may be held. This decision may be made entirely at Kryzen Software Solutions’ discretion, without regard to where in the world you are located, or from where you accessed the site.
        </p>
      </div>
      <CTAWorkTogether />
      <CTASubscribe />
    </>
  )
}

export default Terms
