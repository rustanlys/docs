(function() {var type_impls = {
"rupta":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#163\">source</a><a href=\"#impl-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/trait.IndexType.html\" title=\"trait petgraph::graph_impl::IndexType\">IndexType</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#165\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html#tymethod.new\" class=\"fn\">new</a>(x: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h4></section><section id=\"method.index\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#170\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html#tymethod.index\" class=\"fn\">index</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.end\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#177\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html#tymethod.end\" class=\"fn\">end</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h4></section></summary><div class=\"docblock\"><p>An invalid <code>EdgeIndex</code> used to denote absence of an edge, for example\nto end an adjacency list.</p>\n</div></details></div></details>",0,"rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Hash-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-PartialOrd-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1127\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1144\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1160\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#1177\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Default-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<section id=\"impl-Eq-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Eq-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Ord-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#830-832\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#850-852\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#875-878\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CIx%3E-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#186\">source</a><a href=\"#impl-From%3CIx%3E-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Ix&gt; for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/trait.IndexType.html\" title=\"trait petgraph::graph_impl::IndexType\">IndexType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#187\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(ix: Ix) -&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Ix>","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#192\">source</a><a href=\"#impl-Debug-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#193\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<section id=\"impl-StructuralPartialEq-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-StructuralPartialEq-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h3></section>","StructuralPartialEq","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<section id=\"impl-GraphIndex-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#1937\">source</a><a href=\"#impl-GraphIndex-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/trait.GraphIndex.html\" title=\"trait petgraph::graph_impl::GraphIndex\">GraphIndex</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/trait.IndexType.html\" title=\"trait petgraph::graph_impl::IndexType\">IndexType</a>,</div></h3></section>","GraphIndex","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<section id=\"impl-Copy-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Copy-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section>","Copy","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-PartialEq-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-EdgeIndex%3CIx%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#impl-Clone-for-EdgeIndex%3CIx%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Ix&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;<div class=\"where\">where\n    Ix: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/petgraph/0.4/src/petgraph/graph_impl/mod.rs.html#160\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/petgraph/0.4/petgraph/graph_impl/struct.EdgeIndex.html\" title=\"struct petgraph::graph_impl::EdgeIndex\">EdgeIndex</a>&lt;Ix&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","rupta::graph::call_graph::CGEdgeId","rupta::graph::pag::PAGEdgeId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()