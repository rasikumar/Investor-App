import OtpForm from "@/components/forms/otp-form";
import { ClientRoutes } from "@/const/ClientRoutes";
import { GalleryVerticalEnd } from "lucide-react";
import { useLocation } from "react-router";

export default function OtpPage() {
  const location = useLocation();
  const userId = location.state?.VerifyId;

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a
            href={ClientRoutes.INDEX_ROUTE}
            className="flex items-center gap-2 font-medium"
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Investure
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <OtpForm userId={userId} />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="./auth_image.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
    </div>
  );
}
