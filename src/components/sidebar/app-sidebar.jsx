import { ClientRoutes } from "@/const/ClientRoutes";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import {
  Building2,
  Home,
  LucideBadgeDollarSign,
  PiggyBank,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: `${ClientRoutes.INDEX_ROUTE}`,
      icon: Home,
    },
    {
      title: "Earnings",
      url: `${ClientRoutes.EARNINGS_ROUTE}`,
      icon: LucideBadgeDollarSign,
    },
    {
      title: "Rent",
      url: `${ClientRoutes.RENT_ROUTE}`,
      icon: Building2,
    },
    {
      title: "Dividends",
      url: `${ClientRoutes.DIVIDENDS_ROUTE}`,
      icon: PiggyBank,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
