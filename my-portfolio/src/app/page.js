'use client'

import Image from 'next/image'
import { BsFillMoonStarsFill, BsDownload } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import profile from '../assets/hombre-saludando.png'
import code from '../assets/code.png'
import experiencia from '../assets/experiencia.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const downloadFile = async () => {
    const PFD_FILE_URL = '/curriculum_espanol.pdf';
  
    try {
      const response = await fetch(PFD_FILE_URL);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'archivo.pdf';
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>developedByLucasEspindola</h1> {/*alguna identificacion*/}
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer dark:text-white' onClick={() => setDarkMode(!darkMode)}/>
              </li>
              <li>
                  <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' onClick={downloadFile}>Curriculum Vitae <BsDownload className='inline'/></button> 
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Lucas Nahuel Espindola {/*mi nombre*/}
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Backend Developer {/*que soy*/}
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
              Poseo habilidades probadas para realizar pruebas y mejoras de rendimiento, actualizaci&oacute;n de software y desarrollo de nuevas funcionalidades. Deseo
              contribuir a una empresa din&aacute;mica y en expansi&oacute;n. {/*descripcion*/}
            </p>
          </div>
          
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href='https://twitter.com/lucases98' target='_blank'><AiFillTwitterCircle className='cursor-pointer hover:text-black dark:hover:text-white'/></a>
            <a href='https://www.linkedin.com/in/lucas-nahuel-espindola/' target='_blank'><AiFillLinkedin className='cursor-pointer hover:text-black dark:hover:text-white'/></a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={profile} layout='fill' objectFit='cover' alt='Hombre saludando'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              Habilidades {/*algo*/}
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Dado a mi formaci&oacute;n academica, poseo conocimientos comprobables en diferentes tecnolog&iacute;as. <br/>
              Tambi&eacute;n me instruy&oacute; personalmente en las tecnolog&iacute;as m&aacute;s relevantes de la industria. {/*algo masssss*/}
            </p>
          </div>

          <div className='text-center p-10 rounded-xl my-10 hover:shadow-lg dark:hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,1)] dark:text-white'>
            <Image src={code} width={100} height={100} className='inline' alt='Foto de HashTag'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Tecnolog&iacute;as {/*mi especialidad*/}
            </h3>
            <p>
              Soy curioso y me gusta aprender nuevas tecnolog&iacute;as, me apasiona el reto de tener que aprender algo desde cero, aunque ya halla mucho desarrollo sobre eso. <br/>
              Eso me incentiva a querer mejorar {/*algo massssss*/}
            </p>
            <h4 className='py-4 text-teal-600'>Skills</h4>
            <div className='grid grid-cols-2 w-80 inline-grid'>
              <p className='text-gray-800 py-1 dark:text-white'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>PHP</p>
              <p className='text-gray-800 py-1 dark:text-white'>Bash</p>
              <p className='text-gray-800 py-1 dark:text-white'>PostgreSQL</p>
              <p className='text-gray-800 py-1 dark:text-white'>Docker</p>
              <p className='text-gray-800 py-1 dark:text-white'>Laravel</p>
              <p className='text-gray-800 py-1 dark:text-white'>Linux</p>
              <p className='text-gray-800 py-1 dark:text-white'>React</p>
              <p className='text-gray-800 py-1 dark:text-white'>Ingl&eacute;s (B1)</p>
            </div>
          </div>

          <div className='text-center p-10 rounded-xl my-10 hover:shadow-lg dark:hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,1)] dark:text-white'>
            <Image src={experiencia} width={100} height={100} className='inline' alt='Foto de HashTag'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>
              SIU-Mapuche {/*mi especialidad*/}
            </h3>
            <p>
              Programador del equipo de desarrollo de software utilizado para la Gesti&oacute;n Humanos en Organismos P&uacute;blicos y otras Instituciones de Argentina. <br/>
              Ingrese a la empresa en Octubre de 2021 y actualmente sigo dentro de la empresa. {/*algo massssss*/}
            </p>
            <h4 className='py-4 text-teal-600'>Responsabilidades</h4>
            <p className='text-gray-800 py-1 dark:text-white'>Desarrollo de tareas de backend (PHP)</p>
            <p className='text-gray-800 py-1 dark:text-white'>Uso de metodolog&iacute;as &aacute;giles para la planificaci&oacute;n de tareas.</p>
            <p className='text-gray-800 py-1 dark:text-white'>Atenci&oacute;n a usuarios mediante gestor de solicitudes.</p>
          </div>
        </section>
      </main>
    </div>
  )
}