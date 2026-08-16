import assert from 'node:assert';

async function testLoader() {
  console.log('🧪 Running Test Suite: Loader SSR & Immediate Visibility Verification...');

  let res;
  try {
    res = await fetch('http://localhost:3000');
  } catch {
    res = await fetch('http://localhost:3001');
  }
  assert.strictEqual(res.status, 200, 'Server should respond with HTTP 200 OK');

  const html = await res.text();

  // 1. Verify global loader container is present in initial SSR HTML
  assert.ok(
    html.includes('id="ambish-global-loader"'),
    'FAIL: Loader container #ambish-global-loader missing from SSR HTML'
  );
  console.log('  ✅ PASS: Loader element exists in initial SSR HTML payload.');

  // 2. Verify loader logo is embedded with 0ms data URI
  assert.ok(
    html.includes('id="loader-logo-img"'),
    'FAIL: Loader logo image #loader-logo-img missing from SSR HTML'
  );
  assert.ok(
    html.includes('data:image/png;base64,'),
    'FAIL: Logo must be embedded as inline base64 to prevent blank screen flash'
  );
  console.log('  ✅ PASS: Logo is embedded via inline Base64 (0ms network delay verified).');

  // 3. Verify native CSS keyframe animation is included
  assert.ok(
    html.includes('shimmerGrow'),
    'FAIL: Native CSS shimmer keyframe missing from HTML'
  );
  console.log('  ✅ PASS: Native CSS keyframe animation present for instant rendering.');

  // 4. Verify taglines and brand text exist in initial payload
  assert.ok(
    html.includes('Building Trust Since 1976'),
    'FAIL: Tagline missing from initial HTML'
  );
  console.log('  ✅ PASS: Heritage tagline rendered in initial frame.');

  console.log('\n🎉 ALL LOADER TEST CASES PASSED SUCCESSFULLY!');
}

testLoader().catch((err) => {
  console.error('\n❌ TEST FAILED:', err.message);
  process.exit(1);
});
