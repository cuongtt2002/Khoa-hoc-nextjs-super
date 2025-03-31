import LoginForm from "@/app/[locale]/(public)/(auth)/login/login-form";
import { Locale } from "@/config";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "Login" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Login(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
