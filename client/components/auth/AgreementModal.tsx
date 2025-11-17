import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AgreementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAcknowledge: () => void;
}

export default function AgreementModal({
  open,
  onOpenChange,
  onAcknowledge,
}: AgreementModalProps) {
  const handleAcknowledge = () => {
    onAcknowledge();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-valasys-gray-900">
            Master Subscriber Agreement
          </DialogTitle>
          <DialogDescription className="mt-2 text-valasys-gray-600">
            Please read and understand the terms and conditions before proceeding
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="pr-4 space-y-4 text-sm text-valasys-gray-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                1. Agreement Overview
              </h2>
              <p>
                This Master Subscriber Agreement ("Agreement") is entered into
                between VAIS ("Company") and the subscriber ("You" or "Subscriber").
                This Agreement governs your use of the VAIS platform and services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                2. Terms of Service
              </h2>
              <p>
                By creating an account and using the VAIS platform, you agree to
                comply with all terms, conditions, and policies outlined in this
                Agreement. You agree to use the platform only for lawful purposes
                and in a way that does not infringe upon the rights of others or
                restrict their use and enjoyment of the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                3. Account Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account information and password. You agree to accept responsibility
                for all activities that occur under your account. You must notify
                us immediately of any unauthorized use of your account or any other
                breaches of security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                4. Free Trial Terms
              </h2>
              <p>
                Your free trial provides access to VAIS platform features for a
                limited period. Upon expiration of the free trial, your access may
                be restricted unless you upgrade to a paid subscription. We reserve
                the right to modify or discontinue the free trial at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                5. Acceptable Use Policy
              </h2>
              <p>
                You agree not to use the platform for any unlawful purpose or in
                any way that could damage, disable, overburden, or impair the
                platform. You agree not to attempt to gain unauthorized access to
                the platform, other users' accounts, or the underlying systems and
                networks connected to the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                6. Data and Privacy
              </h2>
              <p>
                We collect and process data in accordance with our Privacy Policy.
                You agree to provide accurate and complete information during
                registration. You are responsible for keeping your personal
                information up to date. By using the platform, you consent to the
                collection and processing of your data as described in our Privacy
                Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                7. Intellectual Property Rights
              </h2>
              <p>
                The VAIS platform, including all content, features, and
                functionality, is owned by the Company and is protected by
                international copyright, trademark, and other intellectual property
                laws. You are granted a limited, non-exclusive, non-transferable
                license to use the platform for your personal or business purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, the Company shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of or inability to use the
                platform, even if the Company has been advised of the possibility of
                such damages.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                9. Termination
              </h2>
              <p>
                The Company reserves the right to suspend or terminate your account
                and access to the platform at any time, for any reason, including if
                you violate this Agreement. Upon termination, your right to access
                the platform will immediately cease, and all provisions of this
                Agreement which by their nature should survive termination shall
                survive.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                10. Modifications to Agreement
              </h2>
              <p>
                The Company reserves the right to modify this Agreement at any time.
                If a revision is material, we will provide at least 30 days notice
                prior to any new terms taking effect. Your continued use of the
                platform following the posting of revised terms means that you accept
                and agree to the changes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                11. Compliance
              </h2>
              <p>
                You represent and warrant that you are at least 18 years of age and
                have the legal capacity to enter into this Agreement. You agree to
                comply with all applicable laws and regulations in your jurisdiction
                regarding the use of the platform.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                12. Governing Law
              </h2>
              <p>
                This Agreement shall be governed by and construed in accordance with
                the laws of the jurisdiction where the Company is located, without
                regard to its conflict of law provisions. Any legal action or
                proceeding related to this Agreement shall be brought exclusively in
                the courts located in that jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-valasys-gray-900">
                13. Contact Information
              </h2>
              <p>
                If you have any questions about this Agreement or our practices,
                please contact us at support@vais.com. We are committed to
                addressing your concerns promptly and fairly.
              </p>
            </section>

            <div className="pt-4 pb-8">
              <p className="text-xs text-valasys-gray-500">
                Last updated: November 2025
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="border-t px-6 py-4 flex gap-3 justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-valasys-gray-300 text-valasys-gray-700 hover:bg-valasys-gray-50"
          >
            Decline
          </Button>
          <Button
            type="button"
            onClick={handleAcknowledge}
            className="bg-valasys-orange hover:bg-valasys-orange-light text-white font-medium"
          >
            I Accept & Agree
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
