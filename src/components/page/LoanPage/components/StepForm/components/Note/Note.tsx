import cls from './Note.module.scss';

export const Note = () => {
  return (
    <p className={cls.note}>
      By tapping or clicking &quot;See Your Loan Options&quot; below, you
      acknowledge and agree to Fundera’s{' '}
      <button type="button">Terms of Use</button> and{' '}
      <button type="button">Privacy Policy</button>. You further acknowledge and
      agree that you are providing express written consent for Fundera to share
      the information you&apos;ve provided with its partners, and for Fundera
      and/or its partners to contact you with marketing and other messages via
      email and/or at the phone number provided via automatic dialing systems,
      recurring autodialed and prerecorded calls, or SMS/MMS messages (charges
      may apply), even if my telephone number is listed on a Federal, State, or
      other jurisdiction Do-Not-Call list. You further acknowledge that consent
      to these communications is not a condition to utilizing these services.
      You also certify that the number you have
    </p>
  );
};
