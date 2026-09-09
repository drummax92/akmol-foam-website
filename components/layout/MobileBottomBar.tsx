import { Button } from "../shared/Button";
import { PhoneButton } from "../shared/PhoneButton";
import { WhatsAppButton } from "../shared/WhatsAppButton";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E4EAF0] bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(16,32,46,0.08)] lg:backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <Button href="/calculator" variant="primary" size="mobile">
          Расчёт
        </Button>

        <WhatsAppButton size="mobile">WhatsApp</WhatsAppButton>

        <PhoneButton size="mobile">Звонок</PhoneButton>
      </div>
    </div>
  );
}
