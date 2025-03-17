import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubHeroSection from "@/components/SubHeroSection";
import GetFunded from "@/components/GetFunded";
import CustomGetFundedBtn from "@/components/CustomGetFundedBtn";
import EquityEdge from "@/components/EquityEdge";
import FundingOptionsSection from "@/components/FundingOptionsSection";
import TradingPlanSelector from "@/components/TradingPlanSelector";
import PayoutCertificatesCarousel from "@/components/PayoutCertificatesCarousel ";
import ProveWorthySection from "@/components/ProveWorthySection";
import DiscordCommunityBenefits from "@/components/DiscordCommunityBenefits";
import ContactForm from "@/components/ContactForm";
import TradeEliteBanner from "@/components/TradeEliteBanner";
import Footer from "@/components/Footer";

export {
    Navbar,
    Hero,
    SubHeroSection,
    GetFunded,
    CustomGetFundedBtn,
    EquityEdge,
    FundingOptionsSection,
    TradingPlanSelector,
    PayoutCertificatesCarousel,
    ProveWorthySection,
    DiscordCommunityBenefits,
    ContactForm,
    TradeEliteBanner,
    Footer
}


export const navbarLinks = [
    {
        id: 1,
        name: "Home",
        route: "/"
    },
    {
        id: 2,
        name: "Pricing",
        route: "/pricing"
    },
    {
        id: 3,
        name: "Affiliate",
        route: "/affiliate"
    },
    {
        id: 4,
        name: "FAQ",
        route: "/faq"
    },
    {
        id: 5,
        name: "Contact",
        route: "/contact-us"
    },
]

// stats
export const steps = [
    {
      number: "01",
      title: "Take the Challenge",
      description: "Show us that you can trade profitably and with discipline by reaching the profit targets set out in your 1-step or 2-step challenge.",
      color: "bg-green-950" // Dark green for first step
    },
    {
      number: "02",
      title: "Get Verified",
      description: "Once you have passed your Equity Edge challenge, the next step is to verify your identity, also known as KYC (Know Your Customer).",
      color: "bg-green-600" // Medium green for second step
    },
    {
      number: "03",
      title: "Become a Funded Trader",
      description: "You will now get your live Equity Edge account details and start generating commissions from all of your simulated profits. You can also scale your Equity Edge account up to $2 million, earning up to a 90% split on all net simulated profits that you generate via our scaling plan.",
      color: "bg-green-400" // Lighter green for third step
    }
  ];


//   Equity features sections
import { Calendar, Target, ArrowUpRight, DollarSign, Users, Ban, LineChart, CalendarDays, RefreshCw } from 'lucide-react';
  export const featuresData = [
    {
      title: "Why Should You Join Equity Edge",
      features: [
        {
          icon: <Ban className="w-8 h-8 text-green-500" />,
          title: "Trade Your Way",
          description: "Hold positions during news, keep trades over the weekend, and trade with lot sizes as large as your leverage allows. Flexibility at your fingertips!"
        },
        {
          icon: <CalendarDays className="w-8 h-8 text-green-500" />,
          title: "Unlimited Trading Days",
          description: "...Hence, we let our traders pass our challenges at their own pace."
        },
        {
          icon: <RefreshCw className="w-8 h-8 text-green-500" />,
          title: "Industry Best Profit Share",
          description: "Your success is our success. We understand and value your hard work and dedication with up to a 90% profit split."
        }
      ]
    },
    {
      title: "Our Trading Benefits",
      features: [
        {
          icon: <Target className="w-8 h-8 text-green-500" />,
          title: "Lowest Profit Target",
          description: "We empower our traders to achieve their trading goals efficiently and effectively."
        },
        {
          icon: <DollarSign className="w-8 h-8 text-green-500" />,
          title: "Lowest Commissions & Spreads",
          description: "Trade like a pro by taking advantage of our super-tight spreads."
        },
        {
          icon: <Users className="w-8 h-8 text-green-500" />,
          title: "High Referral Commissions",
          description: "Your efforts deserve recognition. Refer Equity Edge to your friends and family and earn commissions."
        }
      ]
    },
    {
      title: "Monthly Competitions",
      features: [
        {
          icon: <Calendar className="w-12 h-12 text-green-500 mx-auto" />,
          title: "Rewarding Monthly Competitions",
          description: "Participate in our monthly free trading competitions and get a chance to prove your trading skills.",
          cta: true
        }
      ]
    }
  ];

  