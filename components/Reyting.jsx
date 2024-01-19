import React from 'react'

const Reyting = () => {
  return (
    <section className="rounded-2xl p-6 bg-gradient-to-r from-gray-400 via-gray-900 to-blue-500 text-white mb-10">
	<div className=" mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Tərəfdaş</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
			<p className="text-sm sm:text-base">Abonent</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">3</p>
			<p className="text-sm sm:text-base">Filial</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">8</p>
			<p className="text-sm sm:text-base">TED talks</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">12+</p>
			<p className="text-sm sm:text-base">İllərin təcrübəsi</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
  )
}

export default Reyting
