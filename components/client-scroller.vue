<template>
	<div class="client-scroller">
		<div class="client-scroller__rail">
			<div class="client-scroller__wrapper">
				<template v-for="idx in 2">
					<img :key="idx" src="~/assets/img/client-01.png" srcset="~/assets/img/client-01.png 1x, ~/assets/img/client-01@2x.png 2x" alt="Betterment" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-02.png" srcset="~/assets/img/client-02.png 1x, ~/assets/img/client-02@2x.png 2x" alt="Wunderkind" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-03.png" srcset="~/assets/img/client-03.png 1x, ~/assets/img/client-03@2x.png 2x" alt="cirlce-ci" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-04.png" srcset="~/assets/img/client-04.png 1x, ~/assets/img/client-04@2x.png 2x" alt="classpass" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-05.png" srcset="~/assets/img/client-05.png 1x, ~/assets/img/client-05@2x.png 2x" alt="earnest" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-06.png" srcset="~/assets/img/client-06.png 1x, ~/assets/img/client-06@2x.png 2x" alt="facebook" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-07.png" srcset="~/assets/img/client-07.png 1x, ~/assets/img/client-07@2x.png 2x" alt="thinkx" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-08.png" srcset="~/assets/img/client-08.png 1x, ~/assets/img/client-08@2x.png 2x" alt="Virgin Hyperloop One" class="client-scroller__logo">
					<img :key="idx" src="~/assets/img/client-09.png" srcset="~/assets/img/client-09.png 1x, ~/assets/img/client-09@2x.png 2x" alt="workday" class="client-scroller__logo">
				</template>
			</div>
		</div>
	</div>
</template>