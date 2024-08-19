"use client";

interface SuccessModalProps {
  email: string;
  onClose: () => void;
}

const SuccessModal = ({ email, onClose }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[20px] flex items-center justify-center z-50 px-4">
      <div className="bg-[#1A1A1C]/95 rounded-[20px] p-8 max-w-md w-full relative animate-fadeIn shadow-2xl border border-white/[0.03]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-appleGray hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1L1 15M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-14 h-14 rounded-full bg-[#005D3B] flex items-center justify-center drs-effect">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="white"/>
            </svg>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-medium text-white mb-2">
              We've added you to our<br />
              waiting list!
            </h2>
            <p className="text-appleGray mb-4">We'll let you know when Lap Times is ready.</p>
            
            <div className="bg-[#111113] rounded py-3 px-4 flex items-center justify-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 3.33334H3.33334C2.41667 3.33334 1.67501 4.08334 1.67501 5.00001L1.66667 15C1.66667 15.9167 2.41667 16.6667 3.33334 16.6667H16.6667C17.5833 16.6667 18.3333 15.9167 18.3333 15V5.00001C18.3333 4.08334 17.5833 3.33334 16.6667 3.33334ZM16.6667 6.66668L10 10.8333L3.33334 6.66668V5.00001L10 9.16668L16.6667 5.00001V6.66668Z" fill="#86868B"/>
              </svg>
              <span className="text-white">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;