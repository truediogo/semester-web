import GuySvg from '@/assets/welcome.svg'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <section className="container flex md:items-center flex-col-reverse md:flex-row md:flex-1 md:justify-between">
      <div className="flex flex-1 md:max-w-[980px] flex-col items-start gap-4 md:gap-2 md:ml-16">
        <h1 className="text-3xl text-center md:text-left font-extrabold leading-tight tracking-tighter md:text-4xl">
          Toda a sua jornada <br className="hidden sm:inline" />
          acadêmica em um só lugar
        </h1>
        <p className="mb-16 md:mb-0 max-w-full md:max-w-[660px] text-center md:text-left text-md md:text-lg text-muted-foreground">
          Acompanhe suas faltas, notas e horários de forma simples e intuitiva.
          Transforme a maneira como você gerencia sua vida acadêmica, tenha
          autonomia e mantenha-se sempre atualizado, tudo na palma da sua mão.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center relative min-h-[420px]">
        <Image
          src={GuySvg}
          alt="Garoto do Semester"
          className="w-8/12 md:w-full md:mr-16"
        />
      </div>
    </section>
  )
}
