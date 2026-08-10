import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps Privacy Policy | MRB STUDIO',
  description:
    'Политика конфиденциальности приложений MRB STUDIO / Privacy Policy for MRB STUDIO applications.',
};

export default function AppsPrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
