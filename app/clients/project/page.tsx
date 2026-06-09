import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectView, { Phase, UploadRecord } from './ProjectView';

interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  clientId?: string;
}

async function fetchProjectData(clientId: string) {
  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) return null;
  try {
    const res = await fetch(`${hubUrl}/api/public/client-project?clientId=${clientId}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function fetchUploads(clientId: string): Promise<UploadRecord[]> {
  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) return [];
  try {
    const res = await fetch(`${hubUrl}/api/public/client-uploads?clientId=${clientId}`, { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function ClientProjectPage() {
  const session = await auth();
  if (!session?.user) redirect('/clients/login');

  const user = session.user as SessionUser;
  const clientId = user.clientId || '';

  const [data, uploads] = await Promise.all([
    fetchProjectData(clientId),
    fetchUploads(clientId),
  ]);

  if (!data?.project) {
    return (
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link href="/clients/dashboard" className="inline-flex items-center gap-1.5 text-sm text-[#5a7d8f] hover:text-[#023047] mb-8">
            <ArrowLeft size={14} /> Back to dashboard
          </Link>
          <h1 className="text-3xl font-bold text-[#023047] mb-2">Project Plan</h1>
          <p className="text-[#5a7d8f]">No project found. Contact Craig if you think this is an error.</p>
        </div>
      </main>
    );
  }

  const hubPublicUrl = process.env.NEXT_PUBLIC_HUB_API_URL || process.env.HUB_API_URL || '';

  return (
    <ProjectView
      projectName={data.project.name}
      projectId={data.project.id}
      startDate={data.project.start_date}
      endDate={data.project.end_date}
      phases={data.phases as Phase[]}
      initialUploads={uploads}
      clientId={clientId}
      hubUrl={hubPublicUrl}
    />
  );
}
