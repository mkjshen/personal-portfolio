"use client";

import useProjectModal from "@/app/hooks/useProjectModal";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Modal from "./Modal";

interface ProjectModalProps {
  title?: string;
  src?: string;
  href?: string;
  link?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  src,
  href = "",
  link = "",
}) => {
  const router = useRouter();
  const projectModal = useProjectModal();

  const secondaryActionLabel = useMemo(() => {
    if (!link) {
      return undefined;
    }
    return "Visit this website!";
  }, [link]);

  return (
    <Modal
      isOpen={projectModal.isOpen}
      actionLabel="Source Code"
      onClose={projectModal.onClose}
      onSubmit={() => router.push(href)}
      secondaryAction={!link ? undefined : () => router.push(link)}
      secondaryActionLabel={secondaryActionLabel}
      src={src}
    />
  );
};

export default ProjectModal;
