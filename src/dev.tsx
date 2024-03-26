import { Hono } from 'hono';
import { Layout } from './layout';
import { html } from 'hono/html';
import { uniqueToken } from './utils';

const app = new Hono<{ Bindings: Env }>();

// Route: /dev/*

app.get('/', async (c) => {
	return c.html(
		<Layout>
			<div class="max-w-xl">
				<h1 class="text-2xl font-bold mt-5 mb-5">Judul Laman</h1>
				<p class="text-base">text-base</p>
				<p class="text-base">text-base</p>
				<p class="text-base">text-base</p>
				<p class="text-base">text-base</p>
				<p class="text-base">text-base</p>

				<div class="flex flex-col gap-2 text-[15px] my-8">
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<input type="text" value="Komunikasi" class="flex-grow input" />
					</div>
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<div class="flex items-center gap-3 py-1">
							<label class="flex items-center gap-1">
								<input type="radio" name="JJJ" />
								<span>RADIO</span>
							</label>
							<label class="flex items-center gap-1">
								<input type="radio" name="JJJ" />
								<span>RADIO</span>
							</label>
						</div>
					</div>
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<input type="text" value="Komunikasi" class="input" />
					</div>
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<select class="select flex-grow">
							<option>Option 1</option>
							<option>Option 2</option>
							<option>Option 3</option>
							<option>Option 4</option>
						</select>
					</div>
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<button class="button">Button</button>
						<button disabled class="button">
							Button
						</button>
					</div>
					<div class="flex items-center gap-2">
						<label class="shrink-0">Komunikasi:</label>
						<button class="button-hollow">Button</button>
						<button disabled class="button-hollow">
							Button
						</button>
					</div>
				</div>



				<p class="mb-4">
					<span class="font-bold">default (16px)</span> New Yorkers are facing the winter chill with less warmth this year as the city's
					most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
				</p>
				<p class="text-[15px] mb-4">
					<span class="font-bold">15px</span> New Yorkers are facing the winter chill with less warmth this year as the city's most revered
					soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
				</p>
				<p class="text-md mb-4">
					<span class="font-bold">md (14px)</span> New Yorkers are facing the winter chill with less warmth this year as the city's most
					revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
				</p>
				<p class="text-sm mb-4">
					<span class="font-bold">sm (14px)</span> New Yorkers are facing the winter chill with less warmth this year as the city's most
					revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
				</p>
				<h2 class="text-xl">H2 text-xl font default</h2>
				<h2 class="text-xl font-medium">H2 text-xl font-medium</h2>
				<h2 class="text-xl font-semibold">H2 text-xl font-semibold</h2>
				<h2 class="text-xl font-bold mb-5">H2 text-xl font-bold</h2>

				<h3 class="text-lg font-bold mb-5">H3 text-lg font-bold</h3>
			</div>
			<div class="h-64"></div>
		</Layout>
	);
});

app.get('/token', async (c) => {
	const tokens: string[] = [
		'949580',
		'495027',
		'472599',
		'807056',
		'102463',
		'985291',
		'042701',
		'910534',
		'233677',
		'012480',
		'359912',
		'401527',
		'153149',
		'089031',
		'769115',
		'535017',
		'467319',
		'136527',
		'089354',
		'194406',
		'610677',
		'162075',
		'116392',
		'086601',
		'598140',
		'065190',
		'822910',
		'721370',
		'613107',
		'542465',
		'817335',
		'340791',
		'034371',
		'098846',
		'672381',
		'870133',
		'372057',
		'418029',
		'960285',
		'475033',
		'141272',
		'010265',
		'068176',
		'060118',
		'429761',
		'403132',
		'958247',
		'746512',
		'800142',
		'746971',
		'227463',
		'993606',
		'164318',
		'042509',
		'861360',
		'671929',
		'320659',
		'962351',
		'408206',
		'706489',
		'170958',
		'062954',
		'496514',
		'720062',
		'709831',
		'264103',
		'173762',
		'536748',
		'501399',
		'467323',
		'474171',
		'037058',
		'658109',
		'904816',
		'213869',
		'450504',
		'567323',
		'676954',
		'672681',
		'729089',
		'468354',
		'158169',
		'664946',
		'773916',
		'853802',
		'242998',
		'377061',
		'162873',
		'204819',
		'560213',
		'468806',
		'508562',
		'748007',
		'320866',
		'381025',
		'672642',
		'432470',
		'393742',
		'020965',
		'011450',
	];
	const t = uniqueToken(tokens);

	return c.text(t + '\n' + tokens.join(' '));
});



app.post('/modules', async (c) => {
	const body = await c.req.parseBody();
	console.log(body)
	const batch_id = body.batch_id;
	const type = body.type;
	const selected = body['mod[]'];
	const ids = typeof selected == 'object' ? [...(selected as string[])] : [selected];
	const values: any[] = [];
	if (type == 'ASCENT') {
		if (body.self) values.push({ id: body.self, type: 'SELF' });
		if (body.case) values.push({ id: body.case, type: 'CASE' });
		if (body.face) values.push({ id: body.face, type: 'FACE' });
		if (body.disc) values.push({ id: body.disc, type: 'DISC' });
	} else {
		ids.forEach((v) => {
			const a = v.split(':');
			values.push({ id: a[1], type: a[0] });
		});
	}

	const _values = values.map((v) => `(${batch_id}, '${v.id}', '${v.type}')`).join(',');
	const stm0 = 'DELETE FROM batch_modules WHERE batch_id=?';
	const stm1 = 'INSERT INTO batch_modules VALUES ' + _values;
	console.log(stm1);
	const rs = await c.env.DB.batch([/* 0 */ c.env.DB.prepare(stm0).bind(batch_id), /* 0 */ c.env.DB.prepare(stm1)]);
	return c.html(
		<Layout>
			<div class="px-5">
				<h1 class="text-xl mt-5 mb-5">Modules</h1>
				<pre class="text-[12px] text-red-500">{JSON.stringify(values, null, 2)}</pre>
			</div>
		</Layout>
	);
});

const ACSelectModule = (props: { name: string; label: string; modules: any[]; cat: string; selections: string[] }) => {
	const ac_modules = props.modules.filter((m: any) => m.ascent == 1);
	const _modules = ac_modules.filter((m: any) => m.category == props.cat);
	return (
		<div class="flex items-center">
			<p class="w-36">{props.label}:</p>
			<select name={props.name} class="flex-grow text-[15px] leading-tight py-[6px]">
				<option value=""> - N/A</option>
				{_modules.map((m: any) =>
					props.selections.includes(m.id) ? (
						<option selected value={m.id}>
							{m.title}
						</option>
					) : (
						<option value={m.id}>{m.title}</option>
					)
				)}
			</select>
		</div>
	);
};

const CustomSelectModule = (props: { modules: any[]; isself: boolean; selections: string[] }) => {
	const _modules = props.isself ? props.modules.filter((m) => m.category == 'SELF') : props.modules.filter((m) => m.category != 'SELF');
	return (
		<div class="basis-1/2 flex flex-col gap-1">
			{_modules.map((m) => (
				<div class="flex items-center gap-2 text-nowrap">
					{props.selections.includes(m.id) ? (
						<input type="checkbox" name="mod[]" value={m.category + ':' + m.id} checked />
					) : (
						<input type="checkbox" name="mod[]" value={m.category + ':' + m.id} />
					)}
					<span>{m.title}</span>
				</div>
			))}
		</div>
	);
};

app.get('/modules', async (c) => {
	const db = c.env.DB;
	// ==================
	const batch_id = 102;
	// ==================
	const stm0 = 'SELECT * FROM batches WHERE id=?';
	const stm1 = 'SELECT * FROM batch_modules WHERE batch_id=?';
	const stm2 = 'SELECT * FROM modules';
	// const rs = await c.env.DB.prepare(stm0).all();
	const rs = await db.batch([
		db.prepare(stm0).bind(batch_id),
		db.prepare(stm1).bind(batch_id),
		db.prepare(stm2),
	]);
	const batch:any = rs[0].results[0];
	const modules: any[] = rs[2].results;
	const selections = rs[1].results.map((x:any) => x.module_id);
	console.log(selections);
	return c.html(
		<Layout>
			<div class="max-w-xl px-5">
				<h1 class="text-xl mt-5 mb-5">Modules ({batch.type})</h1>
				<p class="mb-5">Default font size: 16px</p>
				{/* <pre class="text-[11px] text-rose-500 mb-4">{JSON.stringify(selections, null, 4)}</pre> */}
				{batch.type == 'ASCENT' && (
					<form method="post" class="text-[15px] mb-6">
						<input type="hidden" name="type" value="ASCENT" />
						<input type="hidden" name="batch_id" value={batch_id} />
						<p class="mb-2">Ascent Modules Form</p>
						<div class="flex flex-col gap-2 mb-6">
							<ACSelectModule name="self" label="Selftest" modules={modules} cat="SELF" selections={selections} />
							<ACSelectModule name="case" label="Case-Based" modules={modules} cat="CASE" selections={selections} />
							<ACSelectModule name="face" label="Face to Face" modules={modules} cat="FACE" selections={selections} />
							<ACSelectModule name="disc" label="Discusiion" modules={modules} cat="DISC" selections={selections} />
						</div>
						<button id="btn2" class="btn">
							SAVE
						</button>
						<div></div>
					</form>
				)}
				{batch.type != 'ASCENT' && (
					<form method="post" class="text-[15px] mb-6">
						<input type="hidden" name="type" value="CUSTOM" />
						<input type="hidden" name="batch_id" value={batch_id} />
						<p class="mb-2">Form with font size of 15px</p>
						<div class="flex gap-4 mb-6">
							<CustomSelectModule modules={modules} isself={true} selections={selections} />
							<CustomSelectModule modules={modules} isself={false} selections={selections} />
						</div>
						<button disabled id="btn" class="btn">
							SAVE
						</button>
					</form>
				)}
			</div>
			{html`<script>
				const btn = document.getElementById('btn');
				const ch = () => {
					const l = document.querySelectorAll('input:checked').length;
					if (l > 0 && l < 5) btn.removeAttribute('disabled');
					else btn.setAttribute('disabled', true);
				};
				document.querySelectorAll('input').forEach((elm) => {
					elm.addEventListener('change', ch);
				});
			</script>`}
		</Layout>
	);
});

app.get('/batches', async (c) => {
	const stm0 = 'SELECT * FROM batches';
	const rs = await c.env.DB.prepare(stm0).all();
	return c.html(
		<Layout>
			<div class="px-5">
				<h1 class="text-xl my-5">Batches</h1>
				<pre class="text-[12px] text-red-500">{JSON.stringify(rs.results, null, 2)}</pre>
			</div>
		</Layout>
	);
});

app.get('/batches/:batch_id', async (c) => {
	const db = c.env.DB;
	const batch_id = c.req.param('batch_id');
	const stm0 = 'SELECT * FROM batches WHERE id=? LIMIT 1';
	const stm1 = 'SELECT * FROM organizations';
	const stm2 = 'SELECT * FROM modules WHERE ascent=1';
	const rs = await db.batch([/* 0 */ db.prepare(stm0).bind(batch_id), /* 1 */ db.prepare(stm1), /* 2 */ db.prepare(stm2)]);
	const batch: any = rs[0].results[0];
	if (batch == undefined) return c.notFound();

	const org: any = rs[1].results.find((o: any) => o.id == batch.org_id);
	const modules = rs[2].results;
	const self_modules = modules.filter((m: any) => m.category == 'SELF');
	const case_modules = modules.filter((m: any) => m.category == 'CASE');
	const face_modules = modules.filter((m: any) => m.category == 'FACE');
	const disc_modules = modules.filter((m: any) => m.category == 'DISC');
	return c.html(
		<Layout>
			<div class="max-w-xl px-5">
				<h1 class="text-xl mt-5">
					Batches {batch_id} ({batch.type})
				</h1>
				<p class="mb-5">{org.name}</p>
				{/* <pre class="text-[12px] text-red-500">{JSON.stringify(org, null, 2)}</pre> */}
				{/* <pre class="text-[12px] text-red-500">{JSON.stringify(batch, null, 2)}</pre> */}
				<div class="flex flex-col gap-2">
					<div class="flex items-center">
						<p class="w-36">Selftest:</p>
						<select class="flex-grow leading-tight py-[6px]">
							<option value=""> - N/A</option>
							{self_modules.map((m: any) => (
								<option value={m.id}>{m.title}</option>
							))}
						</select>
					</div>
					<div class="flex items-center">
						<p class="w-36">Case-Based:</p>
						<select class="flex-grow leading-tight py-[6px]">
							<option value=""> - N/A</option>
							{case_modules.map((m: any) => (
								<option value={m.id}>{m.title}</option>
							))}
						</select>
					</div>
					<div class="flex items-center">
						<p class="w-36">Face To Face:</p>
						<select class="flex-grow leading-tight py-[6px]">
							<option value=""> - N/A</option>
							{face_modules.map((m: any) => (
								<option value={m.id}>{m.title}</option>
							))}
						</select>
					</div>
					<div class="flex items-center">
						<p class="w-36">Discussion:</p>
						<select class="flex-grow leading-tight py-[6px]">
							<option value=""> - N/A</option>
							{disc_modules.map((m: any) => (
								<option value={m.id}>{m.title}</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</Layout>
	);
});

app.get('/batches/:batch_id/modules', async (c) => {
	const batch_id = c.req.param('batch_id');
	const stm0 = 'SELECT * FROM batches WHERE id=? LIMIT 1';
	const stm1 = 'SELECT * FROM batch_modules WHERE batch_id=?';
	const stm2 = 'SELECT * FROM modules WHERE ascent=1';
	const db = c.env.DB;
	const rs = await db.batch([db.prepare(stm0).bind(batch_id), db.prepare(stm1).bind(batch_id), db.prepare(stm2)]);

	if (rs[0].results[0] == undefined) return c.notFound();

	const modules = rs[1].results;
	return c.html(
		<Layout>
			<div class="px-5">
				<h1 class="text-xl my-5">Batches {batch_id} Modules</h1>
				<pre class="text-[12px] text-red-500">{JSON.stringify(modules, null, 2)}</pre>
				<pre class="text-[12px] text-red-500">{JSON.stringify(rs[2].results, null, 2)}</pre>
			</div>
		</Layout>
	);
});

export { app };
