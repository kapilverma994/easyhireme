import React from "react";
import { Form, option } from "react-bootstrap";

export default function State() {
  return (
    <>
      <div class="flcr-slct-city">
        <select class="form-control">
          <option>Aircraft</option>
          <option>Logistic</option>
          <option>Transport</option>
        </select>

        <select class="form-control" name="scategory" id="">
          <option value="">Select State</option>
          <option value="1">Andra Pradesh</option>
          <option value="2">Arunachal Pradesh</option>
          <option value="3">Assam</option>
          <option value="4">Bihar</option>
          <option value="5">Chhattisgarh</option>
          <option value="6">Goa</option>
          <option value="7">Gujarat</option>
          <option value="8">Haryana</option>
          <option value="9">Himachal Pradesh</option>
          <option value="10">Jammu and Kashmir</option>
          <option value="11">Jharkhand</option>
          <option value="12">Karnataka</option>
          <option value="13">Kerala</option>
          <option value="14">Madya Pradesh</option>
          <option value="15">Maharashtra</option>
          <option value="16">Manipur</option>
          <option value="17">Meghalaya</option>
          <option value="18">Mizoram</option>
          <option value="19">Nagaland</option>
          <option value="20">Orissa</option>
          <option value="21">Punjab</option>
          <option value="22">Rajasthan</option>
          <option value="23">Sikkim</option>
          <option value="24">Tamil Nadu</option>
          <option value="25">Telagana</option>
          <option value="26">Tripura</option>
          <option value="27">Uttaranchal</option>
          <option value="28">Uttar Pradesh</option>
          <option value="29">West Bengal</option>
          <option value="30">Andaman and Nicobar </option>
          <option value="31">Islands</option>
          <option value="32">Chandigarh</option>
          <option value="33">Dadar and Nagar Haveli</option>
          <option value="34">Daman and Diu</option>
          <option value="35">Delhi</option>
          <option value="36">Lakshadeep</option>
          <option value="37">Pondicherry</option>
        </select>
        <select class="form-control" name="" id="">
          <option value="">Select City</option>

          <option value="1">Bombuflat</option>

          <option value="2">Garacharma</option>

          <option value="3">Port Blair</option>

          <option value="4">Rangat</option>

          <option value="5">Addanki</option>

          <option value="6">Adivivaram</option>

          <option value="7">Adoni</option>

          <option value="8">Aganampudi</option>

          <option value="9">Ajjaram</option>

          <option value="10">Akividu</option>

          <option value="11">Akkarampalle</option>

          <option value="12">Akkayapalle</option>

          <option value="13">Akkireddipalem</option>

          <option value="14">Alampur</option>

          <option value="15">Amalapuram</option>

          <option value="16">Amudalavalasa</option>

          <option value="17">Amur</option>

          <option value="18">Anakapalle</option>

          <option value="19">Anantapur</option>

          <option value="20">Andole</option>

          <option value="21">Atmakur</option>

          <option value="22">Attili</option>

          <option value="23">Avanigadda</option>

          <option value="24">Badepalli</option>

          <option value="25">Badvel</option>

          <option value="26">Balapur</option>

          <option value="27">Bandarulanka</option>

          <option value="28">Banganapalle</option>

          <option value="29">Bapatla</option>

          <option value="30">Bapulapadu</option>

          <option value="31">Belampalli</option>

          <option value="32">Bestavaripeta</option>

          <option value="33">Betamcherla</option>

          <option value="34">Bhattiprolu</option>

          <option value="35">Bhimavaram</option>

          <option value="36">Bhimunipatnam</option>

          <option value="37">Bobbili</option>

          <option value="38">Bombuflat</option>

          <option value="39">Bommuru</option>

          <option value="40">Bugganipalle</option>

          <option value="41">Challapalle</option>

          <option value="42">Chandur</option>

          <option value="43">Chatakonda</option>

          <option value="44">Chemmumiahpet</option>

          <option value="45">Chidiga</option>

          <option value="46">Chilakaluripet</option>

          <option value="47">Chimakurthy</option>

          <option value="48">Chinagadila</option>

          <option value="49">Chinagantyada</option>

          <option value="50">Chinnachawk</option>

          <option value="51">Chintalavalasa</option>

          <option value="52">Chipurupalle</option>

          <option value="53">Chirala</option>

          <option value="54">Chittoor</option>

          <option value="55">Chodavaram</option>

          <option value="56">Choutuppal</option>

          <option value="57">Chunchupalle</option>

          <option value="58">Cuddapah</option>

          <option value="59">Cumbum</option>

          <option value="60">Darnakal</option>

          <option value="61">Dasnapur</option>

          <option value="62">Dauleshwaram</option>

          <option value="63">Dharmavaram</option>

          <option value="64">Dhone</option>

          <option value="65">Dommara Nandyal</option>

          <option value="66">Dowlaiswaram</option>

          <option value="67">East Godavari Dist.</option>

          <option value="68">Eddumailaram</option>

          <option value="69">Edulapuram</option>

          <option value="70">Ekambara kuppam</option>

          <option value="71">Eluru</option>

          <option value="72">Enikapadu</option>

          <option value="73">Fakirtakya</option>

          <option value="74">Farrukhnagar</option>

          <option value="75">Gaddiannaram</option>

          <option value="76">Gajapathinagaram</option>

          <option value="77">Gajularega</option>

          <option value="78">Gajuvaka</option>

          <option value="79">Gannavaram</option>

          <option value="80">Garacharma</option>

          <option value="81">Garimellapadu</option>

          <option value="82">Giddalur</option>

          <option value="83">Godavarikhani</option>

          <option value="84">Gopalapatnam</option>

          <option value="85">Gopalur</option>

          <option value="86">Gorrekunta</option>

          <option value="87">Gudivada</option>

          <option value="88">Gudur</option>

          <option value="89">Guntakal</option>

          <option value="90">Guntur</option>

          <option value="91">Guti</option>

          <option value="92">Hindupur</option>

          <option value="93">Hukumpeta</option>

          <option value="94">Ichchapuram</option>

          <option value="95">Isnapur</option>

          <option value="96">Jaggayyapeta</option>

          <option value="97">Jallaram Kamanpur</option>

          <option value="98">Jammalamadugu</option>

          <option value="99">Jangampalli</option>

          <option value="100">Jarjapupeta</option>

          <option value="101">Kadiri</option>

          <option value="102">Kaikalur</option>

          <option value="103">Kakinada</option>

          <option value="104">Kallur</option>

          <option value="105">Kalyandurg</option>

          <option value="106">Kamalapuram</option>

          <option value="107">Kamareddi</option>

          <option value="108">Kanapaka</option>

          <option value="109">Kanigiri</option>

          <option value="110">Kanithi</option>

          <option value="111">Kankipadu</option>

          <option value="112">Kantabamsuguda</option>

          <option value="113">Kanuru</option>

          <option value="114">Karnul</option>

          <option value="115">Katheru</option>

          <option value="116">Kavali</option>

          <option value="117">Kazipet</option>

          <option value="118">Khanapuram Haveli</option>

          <option value="119">Kodar</option>

          <option value="120">Kollapur</option>

          <option value="121">Kondapalem</option>

          <option value="122">Kondapalle</option>

          <option value="123">Kondukur</option>

          <option value="124">Kosgi</option>

          <option value="125">Kothavalasa</option>

          <option value="126">Kottapalli</option>

          <option value="127">Kovur</option>

          <option value="128">Kovurpalle</option>

          <option value="129">Kovvur</option>

          <option value="130">Krishna</option>

          <option value="131">Kuppam</option>

          <option value="132">Kurmannapalem</option>

          <option value="133">Kurnool</option>

          <option value="134">Lakshettipet</option>

          <option value="135">Lalbahadur Nagar</option>

          <option value="136">Machavaram</option>

          <option value="137">Macherla</option>

          <option value="138">Machilipatnam</option>

          <option value="139">Madanapalle</option>

          <option value="140">Madaram</option>

          <option value="141">Madhuravada</option>

          <option value="142">Madikonda</option>

          <option value="143">Madugule</option>

          <option value="144">Mahabubnagar</option>

          <option value="145">Mahbubabad</option>

          <option value="146">Malkajgiri</option>

          <option value="147">Mamilapalle</option>

          <option value="148">Mancheral</option>

          <option value="149">Mandapeta</option>

          <option value="150">Mandasa</option>

          <option value="151">Mangalagiri</option>

          <option value="152">Manthani</option>

          <option value="153">Markapur</option>

          <option value="154">Marturu</option>

          <option value="155">Metpalli</option>

          <option value="156">Mindi</option>

          <option value="157">Mirpet</option>

          <option value="158">Moragudi</option>

          <option value="159">Mothugudam</option>

          <option value="160">Nagari</option>

          <option value="161">Nagireddipalle</option>

          <option value="162">Nandigama</option>

          <option value="163">Nandikotkur</option>

          <option value="164">Nandyal</option>

          <option value="165">Narasannapeta</option>

          <option value="166">Narasapur</option>

          <option value="167">Narasaraopet</option>

          <option value="168">Narayanavanam</option>

          <option value="169">Narsapur</option>

          <option value="170">Narsingi</option>

          <option value="171">Narsipatnam</option>

          <option value="172">Naspur</option>

          <option value="173">Nathayyapalem</option>

          <option value="174">Nayudupeta</option>

          <option value="175">Nelimaria</option>

          <option value="176">Nellore</option>

          <option value="177">Nidadavole</option>

          <option value="178">Nuzvid</option>

          <option value="179">Omerkhan daira</option>

          <option value="180">Ongole</option>

          <option value="181">Osmania University</option>

          <option value="182">Pakala</option>

          <option value="183">Palakole</option>

          <option value="184">Palakurthi</option>

          <option value="185">Palasa</option>

          <option value="186">Palempalle</option>

          <option value="187">Palkonda</option>

          <option value="188">Palmaner</option>

          <option value="189">Pamur</option>

          <option value="190">Panjim</option>

          <option value="191">Papampeta</option>

          <option value="192">Parasamba</option>

          <option value="193">Parvatipuram</option>

          <option value="194">Patancheru</option>

          <option value="195">Payakaraopet</option>

          <option value="196">Pedagantyada</option>

          <option value="197">Pedana</option>

          <option value="198">Peddapuram</option>

          <option value="199">Pendurthi</option>

          <option value="200">Penugonda</option>

          <option value="201">Penukonda</option>

          <option value="202">Phirangipuram</option>

          <option value="203">Pithapuram</option>

          <option value="204">Ponnur</option>

          <option value="205">Port Blair</option>

          <option value="206">Pothinamallayyapalem</option>

          <option value="207">Prakasam</option>

          <option value="208">Prasadampadu</option>

          <option value="209">Prasantinilayam</option>

          <option value="210">Proddatur</option>

          <option value="211">Pulivendla</option>

          <option value="212">Punganuru</option>

          <option value="213">Puttur</option>

          <option value="214">Qutubullapur</option>

          <option value="215">Rajahmundry</option>

          <option value="216">Rajamahendri</option>

          <option value="217">Rajampet</option>

          <option value="218">Rajendranagar</option>

          <option value="219">Rajoli</option>

          <option value="220">Ramachandrapuram</option>

          <option value="221">Ramanayyapeta</option>

          <option value="222">Ramapuram</option>

          <option value="223">Ramarajupalli</option>

          <option value="224">Ramavarappadu</option>

          <option value="225">Rameswaram</option>

          <option value="226">Rampachodavaram</option>

          <option value="227">Ravulapalam</option>

          <option value="228">Rayachoti</option>

          <option value="229">Rayadrug</option>

          <option value="230">Razam</option>

          <option value="231">Razole</option>

          <option value="232">Renigunta</option>

          <option value="233">Repalle</option>

          <option value="234">Rishikonda</option>

          <option value="235">Salur</option>

          <option value="236">Samalkot</option>

          <option value="237">Sattenapalle</option>

          <option value="238">Seetharampuram</option>

          <option value="239">Serilungampalle</option>

          <option value="240">Shankarampet</option>

          <option value="241">Shar</option>

          <option value="242">Singarayakonda</option>

          <option value="243">Sirpur</option>

          <option value="244">Sirsilla</option>

          <option value="245">Sompeta</option>

          <option value="246">Sriharikota</option>

          <option value="247">Srikakulam</option>

          <option value="248">Srikalahasti</option>

          <option value="249">Sriramnagar</option>

          <option value="250">Sriramsagar</option>

          <option value="251">Srisailam</option>

          <option value="252">Srisailamgudem Devasthanam</option>

          <option value="253">Sulurpeta</option>

          <option value="254">Suriapet</option>

          <option value="255">Suryaraopet</option>

          <option value="256">Tadepalle</option>

          <option value="257">Tadepalligudem</option>

          <option value="258">Tadpatri</option>

          <option value="259">Tallapalle</option>

          <option value="260">Tanuku</option>

          <option value="261">Tekkali</option>

          <option value="262">Tenali</option>

          <option value="263">Tigalapahad</option>

          <option value="264">Tiruchanur</option>

          <option value="265">Tirumala</option>

          <option value="266">Tirupati</option>

          <option value="267">Tirvuru</option>

          <option value="268">Trimulgherry</option>

          <option value="269">Tuni</option>

          <option value="270">Turangi</option>

          <option value="271">Ukkayapalli</option>

          <option value="272">Ukkunagaram</option>

          <option value="273">Uppal Kalan</option>

          <option value="274">Upper Sileru</option>

          <option value="275">Uravakonda</option>

          <option value="276">Vadlapudi</option>

          <option value="277">Vaparala</option>

          <option value="278">Vemalwada</option>

          <option value="279">Venkatagiri</option>

          <option value="280">Venkatapuram</option>

          <option value="281">Vepagunta</option>

          <option value="282">Vetapalem</option>

          <option value="283">Vijayapuri</option>

          <option value="284">Vijayapuri South</option>

          <option value="285">Vijayawada</option>

          <option value="286">Vinukonda</option>

          <option value="287">Visakhapatnam</option>

          <option value="288">Vizianagaram</option>

          <option value="289">Vuyyuru</option>

          <option value="290">Wanparti</option>

          <option value="291">West Godavari Dist.</option>

          <option value="292">Yadagirigutta</option>

          <option value="293">Yarada</option>

          <option value="294">Yellamanchili</option>

          <option value="295">Yemmiganur</option>

          <option value="296">Yenamalakudru</option>

          <option value="297">Yendada</option>

          <option value="298">Yerraguntla</option>

          <option value="299">Along</option>

          <option value="300">Basar</option>

          <option value="301">Bondila</option>

          <option value="302">Changlang</option>

          <option value="303">Daporijo</option>

          <option value="304">Deomali</option>

          <option value="305">Itanagar</option>

          <option value="306">Jairampur</option>

          <option value="307">Khonsa</option>

          <option value="308">Naharlagun</option>

          <option value="309">Namsai</option>

          <option value="310">Pasighat</option>

          <option value="311">Roing</option>

          <option value="312">Seppa</option>

          <option value="313">Tawang</option>

          <option value="314">Tezu</option>

          <option value="315">Ziro</option>

          <option value="316">Abhayapuri</option>

          <option value="317">Ambikapur</option>

          <option value="318">Amguri</option>

          <option value="319">Anand Nagar</option>

          <option value="320">Badarpur</option>

          <option value="321">Badarpur Railway Town</option>

          <option value="322">Bahbari Gaon</option>

          <option value="323">Bamun Sualkuchi</option>

          <option value="324">Barbari</option>

          <option value="325">Barpathar</option>

          <option value="326">Barpeta</option>

          <option value="327">Barpeta Road</option>

          <option value="328">Basugaon</option>

          <option value="329">Bihpuria</option>

          <option value="330">Bijni</option>

          <option value="331">Bilasipara</option>

          <option value="332">Biswanath Chariali</option>

          <option value="333">Bohori</option>

          <option value="334">Bokajan</option>

          <option value="335">Bokokhat</option>

          <option value="336">Bongaigaon</option>

          <option value="337">Bongaigaon Petro-chemical Town</option>

          <option value="338">Borgolai</option>

          <option value="339">Chabua</option>

          <option value="340">Chandrapur Bagicha</option>

          <option value="341">Chapar</option>

          <option value="342">Chekonidhara</option>

          <option value="343">Choto Haibor</option>

          <option value="344">Dergaon</option>

          <option value="345">Dharapur</option>

          <option value="346">Dhekiajuli</option>

          <option value="347">Dhemaji</option>

          <option value="348">Dhing</option>

          <option value="349">Dhubri</option>

          <option value="350">Dhuburi</option>

          <option value="351">Dibrugarh</option>

          <option value="352">Digboi</option>

          <option value="353">Digboi Oil Town</option>

          <option value="354">Dimaruguri</option>

          <option value="355">Diphu</option>

          <option value="356">Dispur</option>

          <option value="357">Doboka</option>

          <option value="358">Dokmoka</option>

          <option value="359">Donkamokan</option>

          <option value="360">Duliagaon</option>

          <option value="361">Duliajan</option>

          <option value="362">Duliajan No.1</option>

          <option value="363">Dum Duma</option>

          <option value="364">Durga Nagar</option>

          <option value="365">Gauripur</option>

          <option value="366">Goalpara</option>

          <option value="367">Gohpur</option>

          <option value="368">Golaghat</option>

          <option value="369">Golakganj</option>

          <option value="370">Gossaigaon</option>

          <option value="371">Guwahati</option>

          <option value="372">Haflong</option>

          <option value="373">Hailakandi</option>

          <option value="374">Hamren</option>

          <option value="375">Hauli</option>

          <option value="376">Hauraghat</option>

          <option value="377">Hojai</option>

          <option value="378">Jagiroad</option>

          <option value="379">Jagiroad Paper Mill</option>

          <option value="380">Jogighopa</option>

          <option value="381">Jonai Bazar</option>

          <option value="382">Jorhat</option>

          <option value="383">Kampur Town</option>

          <option value="384">Kamrup</option>

          <option value="385">Kanakpur</option>

          <option value="386">Karimganj</option>

          <option value="387">Kharijapikon</option>

          <option value="388">Kharupetia</option>

          <option value="389">Kochpara</option>

          <option value="390">Kokrajhar</option>

          <option value="391">Kumar Kaibarta Gaon</option>

          <option value="392">Lakhimpur</option>

          <option value="393">Lakhipur</option>

          <option value="394">Lala</option>

          <option value="395">Lanka</option>

          <option value="396">Lido Tikok</option>

          <option value="397">Lido Town</option>

          <option value="398">Lumding</option>

          <option value="399">Lumding Railway Colony</option>

          <option value="400">Mahur</option>

          <option value="401">Maibong</option>

          <option value="402">Majgaon</option>

          <option value="403">Makum</option>

          <option value="404">Mangaldai</option>

          <option value="405">Mankachar</option>

          <option value="406">Margherita</option>

          <option value="407">Mariani</option>

          <option value="408">Marigaon</option>

          <option value="409">Moran</option>

          <option value="410">Moranhat</option>

          <option value="411">Nagaon</option>

          <option value="412">Naharkatia</option>

          <option value="413">Nalbari</option>

          <option value="414">Namrup</option>

          <option value="415">Naubaisa Gaon</option>

          <option value="416">Nazira</option>

          <option value="417">New Bongaigaon Railway Colony</option>

          <option value="418">Niz-Hajo</option>

          <option value="419">North Guwahati</option>

          <option value="420">Numaligarh</option>

          <option value="421">Palasbari</option>

          <option value="422">Panchgram</option>

          <option value="423">Pathsala</option>

          <option value="424">Raha</option>

          <option value="425">Rangapara</option>

          <option value="426">Rangia</option>

          <option value="427">Salakati</option>

          <option value="428">Sapatgram</option>

          <option value="429">Sarthebari</option>

          <option value="430">Sarupathar</option>

          <option value="431">Sarupathar Bengali</option>

          <option value="432">Senchoagaon</option>

          <option value="433">Sibsagar</option>

          <option value="434">Silapathar</option>

          <option value="435">Silchar</option>

          <option value="436">Silchar Part-X</option>

          <option value="437">Sonari</option>

          <option value="438">Sorbhog</option>

          <option value="439">Sualkuchi</option>

          <option value="440">Tangla</option>

          <option value="441">Tezpur</option>

          <option value="442">Tihu</option>

          <option value="443">Tinsukia</option>

          <option value="444">Titabor</option>

          <option value="445">Udalguri</option>

          <option value="446">Umrangso</option>

          <option value="447">Uttar Krishnapur Part-I</option>

          <option value="473">Bhimnagar</option>

          <option value="474">Bhojpur</option>

          <option value="475">Bihar</option>

          <option value="476">Bihar Sharif</option>

          <option value="477">Bihariganj</option>

          <option value="478">Bikramganj</option>

          <option value="479">Birpur</option>

          <option value="480">Bodh Gaya</option>

          <option value="481">Buxar</option>

          <option value="482">Chakia</option>

          <option value="483">Chanpatia</option>

          <option value="484">Chhapra</option>

          <option value="485">Chhatapur</option>

          <option value="486">Colgong</option>

          <option value="487">Dalsingh Sarai</option>

          <option value="488">Darbhanga</option>

          <option value="489">Daudnagar</option>

          <option value="490">Dehri</option>

          <option value="491">Dhaka</option>

          <option value="492">Dighwara</option>

          <option value="493">Dinapur</option>

          <option value="494">Dinapur Cantonment</option>

          <option value="495">Dumra</option>

          <option value="496">Dumraon</option>

          <option value="497">Fatwa</option>

          <option value="498">Forbesganj</option>

          <option value="499">Gaya</option>

          <option value="500">Gazipur</option>

          <option value="501">Ghoghardiha</option>

          <option value="502">Gogri Jamalpur</option>

          <option value="503">Gopalganj</option>

          <option value="504">Habibpur</option>

          <option value="505">Hajipur</option>

          <option value="506">Hasanpur</option>

          <option value="507">Hazaribagh</option>

          <option value="508">Hilsa</option>

          <option value="509">Hisua</option>

          <option value="510">Islampur</option>

          <option value="511">Jagdispur</option>

          <option value="512">Jahanabad</option>

          <option value="513">Jamalpur</option>

          <option value="514">Jamhaur</option>

          <option value="515">Jamui</option>

          <option value="516">Janakpur Road</option>

          <option value="517">Janpur</option>

          <option value="518">Jaynagar</option>

          <option value="519">Jha Jha</option>

          <option value="520">Jhanjharpur</option>

          <option value="521">Jogbani</option>

          <option value="522">Kanti</option>

          <option value="523">Kasba</option>

          <option value="524">Kataiya</option>

          <option value="525">Katihar</option>

          <option value="526">Khagaria</option>

          <option value="527">Khagaul</option>

          <option value="528">Kharagpur</option>

          <option value="529">Khusrupur</option>

          <option value="530">Kishanganj</option>

          <option value="531">Koath</option>

          <option value="532">Koilwar</option>

          <option value="533">Lakhisarai</option>

          <option value="534">Lalganj</option>

          <option value="535">Lauthaha</option>

          <option value="536">Madhepura</option>

          <option value="537">Madhubani</option>

          <option value="538">Maharajganj</option>

          <option value="539">Mahnar Bazar</option>

          <option value="540">Mairwa</option>

          <option value="541">Makhdumpur</option>

          <option value="542">Maner</option>

          <option value="543">Manihari</option>

          <option value="544">Marhaura</option>

          <option value="545">Masaurhi</option>

          <option value="546">Mirganj</option>

          <option value="547">Mohiuddinagar</option>

          <option value="548">Mokama</option>

          <option value="549">Motihari</option>

          <option value="550">Motipur</option>

          <option value="551">Munger</option>

          <option value="552">Murliganj</option>

          <option value="553">Muzaffarpur</option>

          <option value="554">Nabinagar</option>

          <option value="555">Narkatiaganj</option>

          <option value="556">Nasriganj</option>

          <option value="557">Natwar</option>

          <option value="558">Naugachhia</option>

          <option value="559">Nawada</option>

          <option value="560">Nirmali</option>

          <option value="561">Nokha</option>

          <option value="562">Paharpur</option>

          <option value="563">Patna</option>

          <option value="564">Phulwari</option>

          <option value="565">Piro</option>

          <option value="566">Purnia</option>

          <option value="567">Pusa</option>

          <option value="568">Rafiganj</option>

          <option value="569">Raghunathpur</option>

          <option value="570">Rajgir</option>

          <option value="571">Ramnagar</option>

          <option value="572">Raxaul</option>

          <option value="573">Revelganj</option>

          <option value="574">Rusera</option>

          <option value="575">Sagauli</option>

          <option value="576">Saharsa</option>

          <option value="577">Samastipur</option>

          <option value="578">Sasaram</option>

          <option value="579">Shahpur</option>

          <option value="580">Shaikhpura</option>

          <option value="581">Sherghati</option>

          <option value="582">Shivhar</option>

          <option value="583">Silao</option>

          <option value="584">Sitamarhi</option>

          <option value="585">Siwan</option>

          <option value="586">Sonepur</option>

          <option value="587">Sultanganj</option>

          <option value="588">Supaul</option>

          <option value="589">Teghra</option>

          <option value="590">Tekari</option>

          <option value="591">Thakurganj</option>

          <option value="592">Vaishali</option>

          <option value="593">Waris Aliganj</option>

          <option value="594">Chandigarh</option>

          <option value="595">Ahiwara</option>

          <option value="596">Akaltara</option>

          <option value="597">Ambagarh Chauki</option>

          <option value="598">Ambikapur</option>

          <option value="599">Arang</option>

          <option value="600">Bade Bacheli</option>

          <option value="601">Bagbahara</option>

          <option value="602">Baikunthpur</option>

          <option value="603">Balod</option>

          <option value="604">Baloda</option>

          <option value="605">Baloda Bazar</option>

          <option value="606">Banarsi</option>

          <option value="607">Basna</option>

          <option value="608">Bemetra</option>

          <option value="609">Bhanpuri</option>

          <option value="610">Bhatapara</option>

          <option value="611">Bhatgaon</option>

          <option value="612">Bhilai</option>

          <option value="613">Bilaspur</option>

          <option value="614">Bilha</option>

          <option value="615">Birgaon</option>

          <option value="616">Bodri</option>

          <option value="617">Champa</option>

          <option value="618">Charcha</option>

          <option value="619">Charoda</option>

          <option value="620">Chhuikhadan</option>

          <option value="621">Chirmiri</option>

          <option value="622">Dantewada</option>

          <option value="623">Deori</option>

          <option value="624">Dhamdha</option>

          <option value="625">Dhamtari</option>

          <option value="626">Dharamjaigarh</option>

          <option value="627">Dipka</option>

          <option value="628">Doman Hill Colliery</option>

          <option value="629">Dongargaon</option>

          <option value="630">Dongragarh</option>

          <option value="631">Durg</option>

          <option value="632">Frezarpur</option>

          <option value="633">Gandai</option>

          <option value="634">Gariaband</option>

          <option value="635">Gaurela</option>

          <option value="636">Gelhapani</option>

          <option value="637">Gharghoda</option>

          <option value="638">Gidam</option>

          <option value="639">Gobra Nawapara</option>

          <option value="640">Gogaon</option>

          <option value="641">Hatkachora</option>

          <option value="642">Jagdalpur</option>

          <option value="643">Jamui</option>

          <option value="644">Jashpurnagar</option>

          <option value="645">Jhagrakhand</option>

          <option value="646">Kanker</option>

          <option value="647">Katghora</option>

          <option value="648">Kawardha</option>

          <option value="649">Khairagarh</option>

          <option value="650">Khamhria</option>

          <option value="651">Kharod</option>

          <option value="652">Kharsia</option>

          <option value="653">Khonga Pani</option>

          <option value="654">Kirandu</option>

          <option value="655">Kirandul</option>

          <option value="656">Kohka</option>

          <option value="657">Kondagaon</option>

          <option value="658">Korba</option>

          <option value="659">Korea</option>

          <option value="660">Koria Block</option>

          <option value="661">Kota</option>

          <option value="662">Kumhari</option>

          <option value="663">Kumud Katta</option>

          <option value="664">Kurasia</option>

          <option value="665">Kurud</option>

          <option value="666">Lingiyadih</option>

          <option value="667">Lormi</option>

          <option value="668">Mahasamund</option>

          <option value="669">Mahendragarh</option>

          <option value="670">Mehmand</option>

          <option value="671">Mongra</option>

          <option value="672">Mowa</option>

          <option value="673">Mungeli</option>

          <option value="674">Nailajanjgir</option>

          <option value="675">Namna Kalan</option>

          <option value="676">Naya Baradwar</option>

          <option value="677">Pandariya</option>

          <option value="678">Patan</option>

          <option value="679">Pathalgaon</option>

          <option value="680">Pendra</option>

          <option value="681">Phunderdihari</option>

          <option value="682">Pithora</option>

          <option value="683">Raigarh</option>

          <option value="684">Raipur</option>

          <option value="685">Rajgamar</option>

          <option value="686">Rajhara</option>

          <option value="687">Rajnandgaon</option>

          <option value="688">Ramanuj Ganj</option>

          <option value="689">Ratanpur</option>

          <option value="690">Sakti</option>

          <option value="691">Saraipali</option>

          <option value="692">Sarajpur</option>

          <option value="693">Sarangarh</option>

          <option value="694">Shivrinarayan</option>

          <option value="695">Simga</option>

          <option value="696">Sirgiti</option>

          <option value="697">Takhatpur</option>

          <option value="698">Telgaon</option>

          <option value="699">Tildanewra</option>

          <option value="700">Urla</option>

          <option value="701">Vishrampur</option>

          <option value="702">Amli</option>

          <option value="703">Silvassa</option>

          <option value="708">Aldona</option>

          <option value="709">Altinho</option>

          <option value="710">Aquem</option>

          <option value="711">Arpora</option>

          <option value="712">Bambolim</option>

          <option value="713">Bandora</option>

          <option value="714">Bardez</option>

          <option value="715">Benaulim</option>

          <option value="716">Betora</option>

          <option value="717">Bicholim</option>

          <option value="718">Calapor</option>

          <option value="719">Candolim</option>

          <option value="720">Caranzalem</option>

          <option value="721">Carapur</option>

          <option value="722">Chicalim</option>

          <option value="723">Chimbel</option>

          <option value="724">Chinchinim</option>

          <option value="725">Colvale</option>

          <option value="726">Corlim</option>

          <option value="727">Cortalim</option>

          <option value="728">Cuncolim</option>

          <option value="729">Curchorem</option>

          <option value="730">Curti</option>

          <option value="731">Davorlim</option>

          <option value="732">Dona Paula</option>

          <option value="733">Goa</option>

          <option value="734">Guirim</option>

          <option value="735">Jua</option>

          <option value="736">Kalangat</option>

          <option value="737">Kankon</option>

          <option value="738">Kundaim</option>

          <option value="739">Loutulim</option>

          <option value="740">Madgaon</option>

          <option value="741">Mapusa</option>

          <option value="742">Margao</option>

          <option value="743">Margaon</option>

          <option value="744">Miramar</option>

          <option value="745">Morjim</option>

          <option value="746">Mormugao</option>

          <option value="747">Navelim</option>

          <option value="748">Pale</option>

          <option value="749">Panaji</option>

          <option value="750">Parcem</option>

          <option value="751">Parra</option>

          <option value="752">Penha de Franca</option>

          <option value="753">Pernem</option>

          <option value="754">Pilerne</option>

          <option value="755">Pissurlem</option>

          <option value="756">Ponda</option>

          <option value="757">Porvorim</option>

          <option value="758">Quepem</option>

          <option value="759">Queula</option>

          <option value="760">Raia</option>

          <option value="761">Reis Magos</option>

          <option value="762">Salcette</option>

          <option value="763">Saligao</option>

          <option value="764">Sancoale</option>

          <option value="765">Sanguem</option>

          <option value="766">Sanquelim</option>

          <option value="767">Sanvordem</option>

          <option value="768">Sao Jose-de-Areal</option>

          <option value="769">Sattari</option>

          <option value="770">Serula</option>

          <option value="771">Sinquerim</option>

          <option value="772">Siolim</option>

          <option value="773">Taleigao</option>

          <option value="774">Tivim</option>

          <option value="775">Valpoi</option>

          <option value="776">Varca</option>

          <option value="777">Vasco</option>

          <option value="778">Verna</option>

          <option value="779">Abrama</option>

          <option value="780">Adalaj</option>

          <option value="781">Adityana</option>

          <option value="782">Advana</option>

          <option value="783">Ahmedabad</option>

          <option value="784">Ahwa</option>

          <option value="785">Alang</option>

          <option value="786">Ambaji</option>

          <option value="787">Ambaliyasan</option>

          <option value="788">Amod</option>

          <option value="789">Amreli</option>

          <option value="790">Amroli</option>

          <option value="791">Anand</option>

          <option value="792">Andada</option>

          <option value="793">Anjar</option>

          <option value="794">Anklav</option>

          <option value="795">Ankleshwar</option>

          <option value="796">Anklesvar INA</option>

          <option value="797">Antaliya</option>

          <option value="798">Arambhada</option>

          <option value="799">Asarma</option>

          <option value="800">Atul</option>

          <option value="801">Babra</option>

          <option value="802">Bag-e-Firdosh</option>

          <option value="803">Bagasara</option>

          <option value="804">Bahadarpar</option>

          <option value="805">Bajipura</option>

          <option value="806">Bajva</option>

          <option value="807">Balasinor</option>

          <option value="808">Banaskantha</option>

          <option value="809">Bansda</option>

          <option value="810">Bantva</option>

          <option value="811">Bardoli</option>

          <option value="812">Barwala</option>

          <option value="813">Bayad</option>

          <option value="814">Bechar</option>

          <option value="815">Bedi</option>

          <option value="816">Beyt</option>

          <option value="817">Bhachau</option>

          <option value="818">Bhanvad</option>

          <option value="819">Bharuch</option>

          <option value="820">Bharuch INA</option>

          <option value="821">Bhavnagar</option>

          <option value="822">Bhayavadar</option>

          <option value="823">Bhestan</option>

          <option value="824">Bhuj</option>

          <option value="825">Bilimora</option>

          <option value="826">Bilkha</option>

          <option value="827">Billimora</option>

          <option value="828">Bodakdev</option>

          <option value="829">Bodeli</option>

          <option value="830">Bopal</option>

          <option value="831">Boria</option>

          <option value="832">Boriavi</option>

          <option value="833">Borsad</option>

          <option value="834">Botad</option>

          <option value="835">Cambay</option>

          <option value="836">Chaklasi</option>

          <option value="837">Chala</option>

          <option value="838">Chalala</option>

          <option value="839">Chalthan</option>

          <option value="840">Chanasma</option>

          <option value="841">Chandisar</option>

          <option value="842">Chandkheda</option>

          <option value="843">Chanod</option>

          <option value="844">Chaya</option>

          <option value="845">Chenpur</option>

          <option value="846">Chhapi</option>

          <option value="847">Chhaprabhatha</option>

          <option value="848">Chhatral</option>

          <option value="849">Chhota Udepur</option>

          <option value="850">Chikhli</option>

          <option value="851">Chiloda</option>

          <option value="852">Chorvad</option>

          <option value="853">Chotila</option>

          <option value="854">Dabhoi</option>

          <option value="855">Dadara</option>

          <option value="856">Dahod</option>

          <option value="857">Dakor</option>

          <option value="858">Damnagar</option>

          <option value="859">Deesa</option>

          <option value="860">Delvada</option>

          <option value="861">Devgadh Baria</option>

          <option value="862">Devsar</option>

          <option value="863">Dhandhuka</option>

          <option value="864">Dhanera</option>

          <option value="865">Dhangdhra</option>

          <option value="866">Dhansura</option>

          <option value="867">Dharampur</option>

          <option value="868">Dhari</option>

          <option value="869">Dhola</option>

          <option value="870">Dholka</option>

          <option value="871">Dholka Rural</option>

          <option value="872">Dhoraji</option>

          <option value="873">Dhrangadhra</option>

          <option value="874">Dhrol</option>

          <option value="875">Dhuva</option>

          <option value="876">Dhuwaran</option>

          <option value="877">Digvijaygram</option>

          <option value="878">Disa</option>

          <option value="879">Dungar</option>

          <option value="880">Dungarpur</option>

          <option value="881">Dungra</option>

          <option value="882">Dwarka</option>

          <option value="883">Flelanganj</option>

          <option value="884">GSFC Complex</option>

          <option value="885">Gadhda</option>

          <option value="886">Gandevi</option>

          <option value="887">Gandhidham</option>

          <option value="888">Gandhinagar</option>

          <option value="889">Gariadhar</option>

          <option value="890">Ghogha</option>

          <option value="891">Godhra</option>

          <option value="892">Gondal</option>

          <option value="893">Hajira INA</option>

          <option value="894">Halol</option>

          <option value="895">Halvad</option>

          <option value="896">Hansot</option>

          <option value="897">Harij</option>

          <option value="898">Himatnagar</option>

          <option value="899">Ichchhapor</option>

          <option value="900">Idar</option>

          <option value="901">Jafrabad</option>

          <option value="902">Jalalpore</option>

          <option value="903">Jambusar</option>

          <option value="904">Jamjodhpur</option>

          <option value="905">Jamnagar</option>

          <option value="906">Jasdan</option>

          <option value="907">Jawaharnagar</option>

          <option value="908">Jetalsar</option>

          <option value="909">Jetpur</option>

          <option value="910">Jodiya</option>

          <option value="911">Joshipura</option>

          <option value="912">Junagadh</option>

          <option value="913">Kadi</option>

          <option value="914">Kadodara</option>

          <option value="915">Kalavad</option>

          <option value="916">Kali</option>

          <option value="917">Kaliawadi</option>

          <option value="918">Kalol</option>

          <option value="919">Kalol INA</option>

          <option value="920">Kandla</option>

          <option value="921">Kanjari</option>

          <option value="922">Kanodar</option>

          <option value="923">Kapadwanj</option>

          <option value="924">Karachiya</option>

          <option value="925">Karamsad</option>

          <option value="926">Karjan</option>

          <option value="927">Kathial</option>

          <option value="928">Kathor</option>

          <option value="929">Katpar</option>

          <option value="930">Kavant</option>

          <option value="931">Keshod</option>

          <option value="932">Kevadiya</option>

          <option value="933">Khambhaliya</option>

          <option value="934">Khambhat</option>

          <option value="935">Kharaghoda</option>

          <option value="936">Khed Brahma</option>

          <option value="937">Kheda</option>

          <option value="938">Kheralu</option>

          <option value="939">Kodinar</option>

          <option value="940">Kosamba</option>

          <option value="941">Kundla</option>

          <option value="942">Kutch</option>

          <option value="943">Kutiyana</option>

          <option value="944">Lakhtar</option>

          <option value="945">Lalpur</option>

          <option value="946">Lambha</option>

          <option value="947">Lathi</option>

          <option value="948">Limbdi</option>

          <option value="949">Limla</option>

          <option value="950">Lunavada</option>

          <option value="951">Madhapar</option>

          <option value="952">Maflipur</option>

          <option value="953">Mahemdavad</option>

          <option value="954">Mahudha</option>

          <option value="955">Mahuva</option>

          <option value="956">Mahuvar</option>

          <option value="957">Makarba</option>

          <option value="958">Makarpura</option>

          <option value="959">Makassar</option>

          <option value="960">Maktampur</option>

          <option value="961">Malia</option>

          <option value="962">Malpur</option>

          <option value="963">Manavadar</option>

          <option value="964">Mandal</option>

          <option value="965">Mandvi</option>

          <option value="966">Mangrol</option>

          <option value="967">Mansa</option>

          <option value="968">Meghraj</option>

          <option value="969">Mehsana</option>

          <option value="970">Mendarla</option>

          <option value="971">Mithapur</option>

          <option value="972">Modasa</option>

          <option value="973">Mogravadi</option>

          <option value="974">Morbi</option>

          <option value="975">Morvi</option>

          <option value="976">Mundra</option>

          <option value="977">Nadiad</option>

          <option value="978">Naliya</option>

          <option value="979">Nanakvada</option>

          <option value="980">Nandej</option>

          <option value="981">Nandesari</option>

          <option value="982">Nandesari INA</option>

          <option value="983">Naroda</option>

          <option value="984">Navagadh</option>

          <option value="985">Navagam Ghed</option>

          <option value="986">Navsari</option>

          <option value="987">Ode</option>

          <option value="988">Okaf</option>

          <option value="989">Okha</option>

          <option value="990">Olpad</option>

          <option value="991">Paddhari</option>

          <option value="992">Padra</option>

          <option value="993">Palanpur</option>

          <option value="994">Palej</option>

          <option value="995">Pali</option>

          <option value="996">Palitana</option>

          <option value="997">Paliyad</option>

          <option value="998">Pandesara</option>

          <option value="999">Panoli</option>

          <option value="1000">Pardi</option>

          <option value="1001">Parnera</option>

          <option value="1002">Parvat</option>

          <option value="1003">Patan</option>

          <option value="1004">Patdi</option>

          <option value="1005">Petlad</option>

          <option value="1006">Petrochemical Complex</option>

          <option value="1007">Porbandar</option>

          <option value="1008">Prantij</option>

          <option value="1009">Radhanpur</option>

          <option value="1010">Raiya</option>

          <option value="1011">Rajkot</option>

          <option value="1012">Rajpipla</option>

          <option value="1013">Rajula</option>

          <option value="1014">Ramod</option>

          <option value="1015">Ranavav</option>

          <option value="1016">Ranoli</option>

          <option value="1017">Rapar</option>

          <option value="1018">Sahij</option>

          <option value="1019">Salaya</option>

          <option value="1020">Sanand</option>

          <option value="1021">Sankheda</option>

          <option value="1022">Santrampur</option>

          <option value="1023">Saribujrang</option>

          <option value="1024">Sarigam INA</option>

          <option value="1025">Sayan</option>

          <option value="1026">Sayla</option>

          <option value="1027">Shahpur</option>

          <option value="1028">Shahwadi</option>

          <option value="1029">Shapar</option>

          <option value="1030">Shivrajpur</option>

          <option value="1031">Siddhapur</option>

          <option value="1032">Sidhpur</option>

          <option value="1033">Sihor</option>

          <option value="1034">Sika</option>

          <option value="1035">Singarva</option>

          <option value="1036">Sinor</option>

          <option value="1037">Sojitra</option>

          <option value="1038">Sola</option>

          <option value="1039">Songadh</option>

          <option value="1040">Suraj Karadi</option>

          <option value="1041">Surat</option>

          <option value="1042">Surendranagar</option>

          <option value="1043">Talaja</option>

          <option value="1044">Talala</option>

          <option value="1045">Talod</option>

          <option value="1046">Tankara</option>

          <option value="1047">Tarsali</option>

          <option value="1048">Thangadh</option>

          <option value="1049">Tharad</option>

          <option value="1050">Thasra</option>

          <option value="1051">Udyognagar</option>

          <option value="1052">Ukai</option>

          <option value="1053">Umbergaon</option>

          <option value="1054">Umbergaon INA</option>

          <option value="1055">Umrala</option>

          <option value="1056">Umreth</option>

          <option value="1057">Un</option>

          <option value="1058">Una</option>

          <option value="1059">Unjha</option>

          <option value="1060">Upleta</option>

          <option value="1061">Utran</option>

          <option value="1062">Uttarsanda</option>

          <option value="1063">V.U. Nagar</option>

          <option value="1064">V.V. Nagar</option>

          <option value="1065">Vadia</option>

          <option value="1066">Vadla</option>

          <option value="1067">Vadnagar</option>

          <option value="1068">Vadodara</option>

          <option value="1069">Vaghodia INA</option>

          <option value="1070">Valbhipur</option>

          <option value="1071">Vallabh Vidyanagar</option>

          <option value="1072">Valsad</option>

          <option value="1073">Valsad INA</option>

          <option value="1074">Vanthali</option>

          <option value="1075">Vapi</option>

          <option value="1076">Vapi INA</option>

          <option value="1077">Vartej</option>

          <option value="1078">Vasad</option>

          <option value="1079">Vasna Borsad INA</option>

          <option value="1080">Vaso</option>

          <option value="1081">Veraval</option>

          <option value="1082">Vidyanagar</option>

          <option value="1083">Vijalpor</option>

          <option value="1084">Vijapur</option>

          <option value="1085">Vinchhiya</option>

          <option value="1086">Vinzol</option>

          <option value="1087">Virpur</option>

          <option value="1088">Visavadar</option>

          <option value="1089">Visnagar</option>

          <option value="1090">Vyara</option>

          <option value="1091">Wadhwan</option>

          <option value="1092">Waghai</option>

          <option value="1093">Waghodia</option>

          <option value="1094">Wankaner</option>

          <option value="1095">Zalod</option>

          <option value="1096">Ambala</option>

          <option value="1097">Ambala Cantt</option>

          <option value="1098">Asan Khurd</option>

          <option value="1099">Asandh</option>

          <option value="1100">Ateli</option>

          <option value="1101">Babiyal</option>

          <option value="1102">Bahadurgarh</option>

          <option value="1103">Ballabgarh</option>

          <option value="1104">Barwala</option>

          <option value="1105">Bawal</option>

          <option value="1106">Bawani Khera</option>

          <option value="1107">Beri</option>

          <option value="1108">Bhiwani</option>

          <option value="1109">Bilaspur</option>

          <option value="1110">Buria</option>

          <option value="1111">Charkhi Dadri</option>

          <option value="1112">Chhachhrauli</option>

          <option value="1113">Chita</option>

          <option value="1114">Dabwali</option>

          <option value="1115">Dharuhera</option>

          <option value="1116">Dundahera</option>

          <option value="1117">Ellenabad</option>

          <option value="1118">Farakhpur</option>

          <option value="1119">Faridabad</option>

          <option value="1120">Farrukhnagar</option>

          <option value="1121">Fatehabad</option>

          <option value="1122">Firozpur Jhirka</option>

          <option value="1123">Gannaur</option>

          <option value="1124">Ghraunda</option>

          <option value="1125">Gohana</option>

          <option value="1126">Gurgaon</option>

          <option value="1127">Haileymandi</option>

          <option value="1128">Hansi</option>

          <option value="1129">Hasanpur</option>

          <option value="1130">Hathin</option>

          <option value="1131">Hisar</option>

          <option value="1132">Hissar</option>

          <option value="1133">Hodal</option>

          <option value="1134">Indri</option>

          <option value="1135">Jagadhri</option>

          <option value="1136">Jakhal Mandi</option>

          <option value="1137">Jhajjar</option>

          <option value="1138">Jind</option>

          <option value="1139">Julana</option>

          <option value="1140">Kaithal</option>

          <option value="1141">Kalanur</option>

          <option value="1142">Kalanwali</option>

          <option value="1143">Kalayat</option>

          <option value="1144">Kalka</option>

          <option value="1145">Kanina</option>

          <option value="1146">Kansepur</option>

          <option value="1147">Kardhan</option>

          <option value="1148">Karnal</option>

          <option value="1149">Kharkhoda</option>

          <option value="1150">Kheri Sampla</option>

          <option value="1151">Kundli</option>

          <option value="1152">Kurukshetra</option>

          <option value="1153">Ladrawan</option>

          <option value="1154">Ladwa</option>

          <option value="1155">Loharu</option>

          <option value="1156">Maham</option>

          <option value="1157">Mahendragarh</option>

          <option value="1158">Mustafabad</option>

          <option value="1159">Nagai Chaudhry</option>

          <option value="1160">Narayangarh</option>

          <option value="1161">Narnaul</option>

          <option value="1162">Narnaund</option>

          <option value="1163">Narwana</option>

          <option value="1164">Nilokheri</option>

          <option value="1165">Nuh</option>

          <option value="1166">Palwal</option>

          <option value="1167">Panchkula</option>

          <option value="1168">Panipat</option>

          <option value="1169">Panipat Taraf Ansar</option>

          <option value="1170">Panipat Taraf Makhdum Zadgan</option>

          <option value="1171">Panipat Taraf Rajputan</option>

          <option value="1172">Pehowa</option>

          <option value="1173">Pinjaur</option>

          <option value="1174">Punahana</option>

          <option value="1175">Pundri</option>

          <option value="1176">Radaur</option>

          <option value="1177">Raipur Rani</option>

          <option value="1178">Rania</option>

          <option value="1179">Ratiya</option>

          <option value="1180">Rewari</option>

          <option value="1181">Rohtak</option>

          <option value="1182">Ropar</option>

          <option value="1183">Sadauri</option>

          <option value="1184">Safidon</option>

          <option value="1185">Samalkha</option>

          <option value="1186">Sankhol</option>

          <option value="1187">Sasauli</option>

          <option value="1188">Shahabad</option>

          <option value="1189">Sirsa</option>

          <option value="1190">Siwani</option>

          <option value="1191">Sohna</option>

          <option value="1192">Sonipat</option>

          <option value="1193">Sukhrali</option>

          <option value="1194">Taoru</option>

          <option value="1195">Taraori</option>

          <option value="1196">Tauru</option>

          <option value="1197">Thanesar</option>

          <option value="1198">Tilpat</option>

          <option value="1199">Tohana</option>

          <option value="1200">Tosham</option>

          <option value="1201">Uchana</option>

          <option value="1202">Uklana Mandi</option>

          <option value="1203">Uncha Siwana</option>

          <option value="1204">Yamunanagar</option>

          <option value="1205">Arki</option>

          <option value="1206">Baddi</option>

          <option value="1207">Bakloh</option>

          <option value="1208">Banjar</option>

          <option value="1209">Bhota</option>

          <option value="1210">Bhuntar</option>

          <option value="1211">Bilaspur</option>

          <option value="1212">Chamba</option>

          <option value="1213">Chaupal</option>

          <option value="1214">Chuari Khas</option>

          <option value="1215">Dagshai</option>

          <option value="1216">Dalhousie</option>

          <option value="1217">Dalhousie Cantonment</option>

          <option value="1218">Damtal</option>

          <option value="1219">Daulatpur</option>

          <option value="1220">Dera Gopipur</option>

          <option value="1221">Dhalli</option>

          <option value="1222">Dharamshala</option>

          <option value="1223">Gagret</option>

          <option value="1224">Ghamarwin</option>

          <option value="1225">Hamirpur</option>

          <option value="1226">Jawala Mukhi</option>

          <option value="1227">Jogindarnagar</option>

          <option value="1228">Jubbal</option>

          <option value="1229">Jutogh</option>

          <option value="1230">Kala Amb</option>

          <option value="1231">Kalpa</option>

          <option value="1232">Kangra</option>

          <option value="1233">Kasauli</option>

          <option value="1234">Kot Khai</option>

          <option value="1235">Kullu</option>

          <option value="1236">Kulu</option>

          <option value="1237">Manali</option>

          <option value="1238">Mandi</option>

          <option value="1239">Mant Khas</option>

          <option value="1240">Mehatpur Basdehra</option>

          <option value="1241">Nadaun</option>

          <option value="1242">Nagrota</option>

          <option value="1243">Nahan</option>

          <option value="1244">Naina Devi</option>

          <option value="1245">Nalagarh</option>

          <option value="1246">Narkanda</option>

          <option value="1247">Nurpur</option>

          <option value="1248">Palampur</option>

          <option value="1249">Pandoh</option>

          <option value="1250">Paonta Sahib</option>

          <option value="1251">Parwanoo</option>

          <option value="1252">Parwanu</option>

          <option value="1253">Rajgarh</option>

          <option value="1254">Rampur</option>

          <option value="1255">Rawalsar</option>

          <option value="1256">Rohru</option>

          <option value="1257">Sabathu</option>

          <option value="1258">Santokhgarh</option>

          <option value="1259">Sarahan</option>

          <option value="1260">Sarka Ghat</option>

          <option value="1261">Seoni</option>

          <option value="1262">Shimla</option>

          <option value="1263">Sirmaur</option>

          <option value="1264">Solan</option>

          <option value="1265">Solon</option>

          <option value="1266">Sundarnagar</option>

          <option value="1267">Sundernagar</option>

          <option value="1268">Talai</option>

          <option value="1269">Theog</option>

          <option value="1270">Tira Sujanpur</option>

          <option value="1271">Una</option>

          <option value="1272">Yol</option>

          <option value="1273">Achabal</option>

          <option value="1274">Akhnur</option>

          <option value="1275">Anantnag</option>

          <option value="1276">Arnia</option>

          <option value="1277">Awantipora</option>

          <option value="1278">Badami Bagh</option>

          <option value="1279">Bandipur</option>

          <option value="1280">Banihal</option>

          <option value="1281">Baramula</option>

          <option value="1282">Baramulla</option>

          <option value="1283">Bari Brahmana</option>

          <option value="1284">Bashohli</option>

          <option value="1285">Batote</option>

          <option value="1286">Bhaderwah</option>

          <option value="1287">Bijbiara</option>

          <option value="1288">Billawar</option>

          <option value="1289">Birwah</option>

          <option value="1290">Bishna</option>

          <option value="1291">Budgam</option>

          <option value="1292">Charari Sharief</option>

          <option value="1293">Chenani</option>

          <option value="1294">Doda</option>

          <option value="1295">Duru-Verinag</option>

          <option value="1296">Gandarbat</option>

          <option value="1297">Gho Manhasan</option>

          <option value="1298">Gorah Salathian</option>

          <option value="1299">Gulmarg</option>

          <option value="1300">Hajan</option>

          <option value="1301">Handwara</option>

          <option value="1302">Hiranagar</option>

          <option value="1303">Jammu</option>

          <option value="1304">Jammu Cantonment</option>

          <option value="1305">Jammu Tawi</option>

          <option value="1306">Jourian</option>

          <option value="1307">Kargil</option>

          <option value="1308">Kathua</option>

          <option value="1309">Katra</option>

          <option value="1310">Khan Sahib</option>

          <option value="1311">Khour</option>

          <option value="1312">Khrew</option>

          <option value="1313">Kishtwar</option>

          <option value="1314">Kud</option>

          <option value="1315">Kukernag</option>

          <option value="1316">Kulgam</option>

          <option value="1317">Kunzer</option>

          <option value="1318">Kupwara</option>

          <option value="1319">Lakhenpur</option>

          <option value="1320">Leh</option>

          <option value="1321">Magam</option>

          <option value="1322">Mattan</option>

          <option value="1323">Naushehra</option>

          <option value="1324">Pahalgam</option>

          <option value="1325">Pampore</option>

          <option value="1326">Parole</option>

          <option value="1327">Pattan</option>

          <option value="1328">Pulwama</option>

          <option value="1329">Punch</option>

          <option value="1330">Qazigund</option>

          <option value="1331">Rajauri</option>

          <option value="1332">Ramban</option>

          <option value="1333">Ramgarh</option>

          <option value="1334">Ramnagar</option>

          <option value="1335">Ranbirsingh Pora</option>

          <option value="1336">Reasi</option>

          <option value="1337">Rehambal</option>

          <option value="1338">Samba</option>

          <option value="1339">Shupiyan</option>

          <option value="1340">Sopur</option>

          <option value="1341">Srinagar</option>

          <option value="1342">Sumbal</option>

          <option value="1343">Sunderbani</option>

          <option value="1344">Talwara</option>

          <option value="1345">Thanamandi</option>

          <option value="1346">Tral</option>

          <option value="1347">Udhampur</option>

          <option value="1348">Uri</option>

          <option value="1349">Vijaypur</option>

          <option value="1350">Adityapur</option>

          <option value="1351">Amlabad</option>

          <option value="1352">Angarpathar</option>

          <option value="1353">Ara</option>

          <option value="1354">Babua Kalan</option>

          <option value="1355">Bagbahra</option>

          <option value="1356">Baliapur</option>

          <option value="1357">Baliari</option>

          <option value="1358">Balkundra</option>

          <option value="1359">Bandhgora</option>

          <option value="1360">Barajamda</option>

          <option value="1361">Barhi</option>

          <option value="1362">Barka Kana</option>

          <option value="1363">Barki Saraiya</option>

          <option value="1364">Barughutu</option>

          <option value="1365">Barwadih</option>

          <option value="1366">Basaria</option>

          <option value="1367">Basukinath</option>

          <option value="1368">Bermo</option>

          <option value="1369">Bhagatdih</option>

          <option value="1370">Bhaurah</option>

          <option value="1371">Bhojudih</option>

          <option value="1372">Bhuli</option>

          <option value="1373">Bokaro</option>

          <option value="1374">Borio Bazar</option>

          <option value="1375">Bundu</option>

          <option value="1376">Chaibasa</option>

          <option value="1377">Chaitudih</option>

          <option value="1378">Chakradharpur</option>

          <option value="1379">Chakulia</option>

          <option value="1380">Chandaur</option>

          <option value="1381">Chandil</option>

          <option value="1382">Chandrapura</option>

          <option value="1383">Chas</option>

          <option value="1384">Chatra</option>

          <option value="1385">Chhatatanr</option>

          <option value="1386">Chhotaputki</option>

          <option value="1387">Chiria</option>

          <option value="1388">Chirkunda</option>

          <option value="1389">Churi</option>

          <option value="1390">Daltenganj</option>

          <option value="1391">Danguwapasi</option>

          <option value="1392">Dari</option>

          <option value="1393">Deoghar</option>

          <option value="1394">Deorikalan</option>

          <option value="1395">Devghar</option>

          <option value="1396">Dhanbad</option>

          <option value="1397">Dhanwar</option>

          <option value="1398">Dhaunsar</option>

          <option value="1399">Dugda</option>

          <option value="1400">Dumarkunda</option>

          <option value="1401">Dumka</option>

          <option value="1402">Egarkunr</option>

          <option value="1403">Gadhra</option>

          <option value="1404">Garwa</option>

          <option value="1405">Ghatsila</option>

          <option value="1406">Ghorabandha</option>

          <option value="1407">Gidi</option>

          <option value="1408">Giridih</option>

          <option value="1409">Gobindpur</option>

          <option value="1410">Godda</option>

          <option value="1411">Godhar</option>

          <option value="1412">Golphalbari</option>

          <option value="1413">Gomoh</option>

          <option value="1414">Gua</option>

          <option value="1415">Gumia</option>

          <option value="1416">Gumla</option>

          <option value="1417">Haludbani</option>

          <option value="1418">Hazaribag</option>

          <option value="1419">Hesla</option>

          <option value="1420">Husainabad</option>

          <option value="1421">Isri</option>

          <option value="1422">Jadugora</option>

          <option value="1423">Jagannathpur</option>

          <option value="1424">Jamadoba</option>

          <option value="1425">Jamshedpur</option>

          <option value="1426">Jamtara</option>

          <option value="1427">Jarangdih</option>

          <option value="1428">Jaridih</option>

          <option value="1429">Jasidih</option>

          <option value="1430">Jena</option>

          <option value="1431">Jharia</option>

          <option value="1432">Jharia Khas</option>

          <option value="1433">Jhinkpani</option>

          <option value="1434">Jhumri Tilaiya</option>

          <option value="1435">Jorapokhar</option>

          <option value="1436">Jugsalai</option>

          <option value="1437">Kailudih</option>

          <option value="1438">Kalikapur</option>

          <option value="1439">Kandra</option>

          <option value="1440">Kanke</option>

          <option value="1441">Katras</option>

          <option value="1442">Kedla</option>

          <option value="1443">Kenduadih</option>

          <option value="1444">Kharkhari</option>

          <option value="1445">Kharsawan</option>

          <option value="1446">Khelari</option>

          <option value="1447">Khunti</option>

          <option value="1448">Kiri Buru</option>

          <option value="1449">Kiriburu</option>

          <option value="1450">Kodarma</option>

          <option value="1451">Kuju</option>

          <option value="1452">Kurpania</option>

          <option value="1453">Kustai</option>

          <option value="1454">Lakarka</option>

          <option value="1455">Lapanga</option>

          <option value="1456">Latehar</option>

          <option value="1457">Lohardaga</option>

          <option value="1458">Loiya</option>

          <option value="1459">Loyabad</option>

          <option value="1460">Madhupur</option>

          <option value="1461">Mahesh Mundi</option>

          <option value="1462">Maithon</option>

          <option value="1463">Malkera</option>

          <option value="1464">Mango</option>

          <option value="1465">Manoharpur</option>

          <option value="1466">Marma</option>

          <option value="1467">Meghahatuburu Forest village</option>

          <option value="1468">Mera</option>

          <option value="1469">Meru</option>

          <option value="1470">Mihijam</option>

          <option value="1471">Mugma</option>

          <option value="1472">Muri</option>

          <option value="1473">Mushabani</option>

          <option value="1474">Nagri Kalan</option>

          <option value="1475">Netarhat</option>

          <option value="1476">Nirsa</option>

          <option value="1477">Noamundi</option>

          <option value="1478">Okni</option>

          <option value="1479">Orla</option>

          <option value="1480">Pakaur</option>

          <option value="1481">Palamau</option>

          <option value="1482">Palawa</option>

          <option value="1483">Panchet</option>

          <option value="1484">Panrra</option>

          <option value="1485">Paratdih</option>

          <option value="1486">Pathardih</option>

          <option value="1487">Patratu</option>

          <option value="1488">Phusro</option>

          <option value="1489">Pondar Kanali</option>

          <option value="1490">Rajmahal</option>

          <option value="1491">Ramgarh</option>

          <option value="1492">Ranchi</option>

          <option value="1493">Ray</option>

          <option value="1494">Rehla</option>

          <option value="1495">Religara</option>

          <option value="1496">Rohraband</option>

          <option value="1497">Sahibganj</option>

          <option value="1498">Sahnidih</option>

          <option value="1499">Saraidhela</option>

          <option value="1500">Saraikela</option>

          <option value="1501">Sarjamda</option>

          <option value="1502">Saunda</option>

          <option value="1503">Sewai</option>

          <option value="1504">Sijhua</option>

          <option value="1505">Sijua</option>

          <option value="1506">Simdega</option>

          <option value="1507">Sindari</option>

          <option value="1508">Sinduria</option>

          <option value="1509">Sini</option>

          <option value="1510">Sirka</option>

          <option value="1511">Siuliban</option>

          <option value="1512">Surubera</option>

          <option value="1513">Tati</option>

          <option value="1514">Tenudam</option>

          <option value="1515">Tisra</option>

          <option value="1516">Topa</option>

          <option value="1517">Topchanchi</option>

          <option value="1518">Adityanagar</option>

          <option value="1519">Adityapatna</option>

          <option value="1520">Afzalpur</option>

          <option value="1521">Ajjampur</option>

          <option value="1522">Aland</option>

          <option value="1523">Almatti Sitimani</option>

          <option value="1524">Alnavar</option>

          <option value="1525">Alur</option>

          <option value="1526">Ambikanagara</option>

          <option value="1527">Anekal</option>

          <option value="1528">Ankola</option>

          <option value="1529">Annigeri</option>

          <option value="1530">Arkalgud</option>

          <option value="1531">Arsikere</option>

          <option value="1532">Athni</option>

          <option value="1533">Aurad</option>

          <option value="1534">Badagavettu</option>

          <option value="1535">Badami</option>

          <option value="1536">Bagalkot</option>

          <option value="1537">Bagepalli</option>

          <option value="1538">Bailhongal</option>

          <option value="1539">Baindur</option>

          <option value="1540">Bajala</option>

          <option value="1541">Bajpe</option>

          <option value="1542">Banavar</option>

          <option value="1543">Bangarapet</option>

          <option value="1544">Bankapura</option>

          <option value="1545">Bannur</option>

          <option value="1546">Bantwal</option>

          <option value="1547">Basavakalyan</option>

          <option value="1548">Basavana Bagevadi</option>

          <option value="1549">Belagula</option>

          <option value="1550">Belakavadiq</option>

          <option value="1551">Belgaum</option>

          <option value="1552">Belgaum Cantonment</option>

          <option value="1553">Bellary</option>

          <option value="1554">Belluru</option>

          <option value="1555">Beltangadi</option>

          <option value="1556">Belur</option>

          <option value="1557">Belvata</option>

          <option value="1558">Bengaluru</option>

          <option value="1559">Bhadravati</option>

          <option value="1560">Bhalki</option>

          <option value="1561">Bhatkal</option>

          <option value="1562">Bhimarayanagudi</option>

          <option value="1563">Bhogadi</option>

          <option value="1564">Bidar</option>

          <option value="1565">Bijapur</option>

          <option value="1566">Bilgi</option>

          <option value="1567">Birur</option>

          <option value="1568">Bommanahalli</option>

          <option value="1569">Bommasandra</option>

          <option value="1570">Byadgi</option>

          <option value="1571">Byatarayanapura</option>

          <option value="1572">Chakranagar Colony</option>

          <option value="1573">Challakere</option>

          <option value="1574">Chamrajnagar</option>

          <option value="1575">Chamundi Betta</option>

          <option value="1576">Channagiri</option>

          <option value="1577">Channapatna</option>

          <option value="1578">Channarayapatna</option>

          <option value="1579">Chickballapur</option>

          <option value="1580">Chik Ballapur</option>

          <option value="1581">Chikkaballapur</option>

          <option value="1582">Chikmagalur</option>

          <option value="1583">Chiknayakanhalli</option>

          <option value="1584">Chikodi</option>

          <option value="1585">Chincholi</option>

          <option value="1586">Chintamani</option>

          <option value="1587">Chitaguppa</option>

          <option value="1588">Chitapur</option>

          <option value="1589">Chitradurga</option>

          <option value="1590">Coorg</option>

          <option value="1591">Dandeli</option>

          <option value="1592">Dargajogihalli</option>

          <option value="1593">Dasarahalli</option>

          <option value="1594">Davangere</option>

          <option value="1595">Devadurga</option>

          <option value="1596">Devagiri</option>

          <option value="1597">Devanhalli</option>

          <option value="1598">Dharwar</option>

          <option value="1599">Dhupdal</option>

          <option value="1600">Dod Ballapur</option>

          <option value="1601">Donimalai</option>

          <option value="1602">Gadag</option>

          <option value="1603">Gajendragarh</option>

          <option value="1604">Ganeshgudi</option>

          <option value="1605">Gangawati</option>

          <option value="1606">Gangoli</option>

          <option value="1607">Gauribidanur</option>

          <option value="1608">Gokak</option>

          <option value="1609">Gokak Falls</option>

          <option value="1610">Gonikoppal</option>

          <option value="1611">Gorur</option>

          <option value="1612">Gottikere</option>

          <option value="1613">Gubbi</option>

          <option value="1614">Gudibanda</option>

          <option value="1615">Gulbarga</option>

          <option value="1616">Guledgudda</option>

          <option value="1617">Gundlupet</option>

          <option value="1618">Gurmatkal</option>

          <option value="1619">Haliyal</option>

          <option value="1620">Hangal</option>

          <option value="1621">Harihar</option>

          <option value="1622">Harpanahalli</option>

          <option value="1623">Hassan</option>

          <option value="1624">Hatti</option>

          <option value="1625">Hatti Gold Mines</option>

          <option value="1626">Haveri</option>

          <option value="1627">Hebbagodi</option>

          <option value="1628">Hebbalu</option>

          <option value="1629">Hebri</option>

          <option value="1630">Heggadadevanakote</option>

          <option value="1631">Herohalli</option>

          <option value="1632">Hidkal</option>

          <option value="1633">Hindalgi</option>

          <option value="1634">Hirekerur</option>

          <option value="1635">Hiriyur</option>

          <option value="1636">Holalkere</option>

          <option value="1637">Hole Narsipur</option>

          <option value="1638">Homnabad</option>

          <option value="1639">Honavar</option>

          <option value="1640">Honnali</option>

          <option value="1641">Hosakote</option>

          <option value="1642">Hosanagara</option>

          <option value="1643">Hosangadi</option>

          <option value="1644">Hosdurga</option>

          <option value="1645">Hoskote</option>

          <option value="1646">Hospet</option>

          <option value="1647">Hubli</option>

          <option value="1648">Hukeri</option>

          <option value="1649">Hunasagi</option>

          <option value="1650">Hunasamaranahalli</option>

          <option value="1651">Hungund</option>

          <option value="1652">Hunsur</option>

          <option value="1653">Huvina Hadagalli</option>

          <option value="1654">Ilkal</option>

          <option value="1655">Indi</option>

          <option value="1656">Jagalur</option>

          <option value="1657">Jamkhandi</option>

          <option value="1658">Jevargi</option>

          <option value="1659">Jog Falls</option>

          <option value="1660">Kabini Colony</option>

          <option value="1661">Kadur</option>

          <option value="1662">Kalghatgi</option>

          <option value="1663">Kamalapuram</option>

          <option value="1664">Kampli</option>

          <option value="1665">Kanakapura</option>

          <option value="1666">Kangrali BK</option>

          <option value="1667">Kangrali KH</option>

          <option value="1668">Kannur</option>

          <option value="1669">Karkala</option>

          <option value="1670">Karwar</option>

          <option value="1671">Kemminja</option>

          <option value="1672">Kengeri</option>

          <option value="1673">Kerur</option>

          <option value="1674">Khanapur</option>

          <option value="1675">Kodigenahalli</option>

          <option value="1676">Kodiyal</option>

          <option value="1677">Kodlipet</option>

          <option value="1678">Kolar</option>

          <option value="1679">Kollegal</option>

          <option value="1680">Konanakunte</option>

          <option value="1681">Konanur</option>

          <option value="1682">Konnur</option>

          <option value="1683">Koppa</option>

          <option value="1684">Koppal</option>

          <option value="1685">Koratagere</option>

          <option value="1686">Kotekara</option>

          <option value="1687">Kothnur</option>

          <option value="1688">Kotturu</option>

          <option value="1689">Krishnapura</option>

          <option value="1690">Krishnarajanagar</option>

          <option value="1691">Krishnarajapura</option>

          <option value="1692">Krishnarajasagara</option>

          <option value="1693">Krishnarajpet</option>

          <option value="1694">Kudchi</option>

          <option value="1695">Kudligi</option>

          <option value="1696">Kudremukh</option>

          <option value="1697">Kumsi</option>

          <option value="1698">Kumta</option>

          <option value="1699">Kundapura</option>

          <option value="1700">Kundgol</option>

          <option value="1701">Kunigal</option>

          <option value="1702">Kurgunta</option>

          <option value="1703">Kushalnagar</option>

          <option value="1704">Kushtagi</option>

          <option value="1705">Kyathanahalli</option>

          <option value="1706">Lakshmeshwar</option>

          <option value="1707">Lingsugur</option>

          <option value="1708">Londa</option>

          <option value="1709">Maddur</option>

          <option value="1710">Madhugiri</option>

          <option value="1711">Madikeri</option>

          <option value="1712">Magadi</option>

          <option value="1713">Magod Falls</option>

          <option value="1714">Mahadeswara Hills</option>

          <option value="1715">Mahadevapura</option>

          <option value="1716">Mahalingpur</option>

          <option value="1717">Maisuru</option>

          <option value="1718">Maisuru Cantonment</option>

          <option value="1719">Malavalli</option>

          <option value="1720">Mallar</option>

          <option value="1721">Malpe</option>

          <option value="1722">Malur</option>

          <option value="1723">Manchenahalli</option>

          <option value="1724">Mandya</option>

          <option value="1725">Mangalore</option>

          <option value="1726">Mangaluru</option>

          <option value="1727">Manipal</option>

          <option value="1728">Manvi</option>

          <option value="1729">Maski</option>

          <option value="1730">Mastikatte Colony</option>

          <option value="1731">Mayakonda</option>

          <option value="1732">Melukote</option>

          <option value="1733">Molakalmuru</option>

          <option value="1734">Mudalgi</option>

          <option value="1735">Mudbidri</option>

          <option value="1736">Muddebihal</option>

          <option value="1737">Mudgal</option>

          <option value="1738">Mudhol</option>

          <option value="1739">Mudigere</option>

          <option value="1740">Mudushedde</option>

          <option value="1741">Mulbagal</option>

          <option value="1742">Mulgund</option>

          <option value="1743">Mulki</option>

          <option value="1744">Mulur</option>

          <option value="1745">Mundargi</option>

          <option value="1746">Mundgod</option>

          <option value="1747">Munirabad</option>

          <option value="1748">Munnur</option>

          <option value="1749">Murudeshwara</option>

          <option value="1750">Mysore</option>

          <option value="1751">Nagamangala</option>

          <option value="1752">Nanjangud</option>

          <option value="1753">Naragund</option>

          <option value="1754">Narasimharajapura</option>

          <option value="1755">Naravi</option>

          <option value="1756">Narayanpur</option>

          <option value="1757">Naregal</option>

          <option value="1758">Navalgund</option>

          <option value="1759">Nelmangala</option>

          <option value="1760">Nipani</option>

          <option value="1761">Nitte</option>

          <option value="1762">Nyamati</option>

          <option value="1763">Padu</option>

          <option value="1764">Pandavapura</option>

          <option value="1765">Pattanagere</option>

          <option value="1766">Pavagada</option>

          <option value="1767">Piriyapatna</option>

          <option value="1768">Ponnampet</option>

          <option value="1769">Puttur</option>

          <option value="1770">Rabkavi</option>

          <option value="1771">Raichur</option>

          <option value="1772">Ramanagaram</option>

          <option value="1773">Ramdurg</option>

          <option value="1774">Ranibennur</option>

          <option value="1775">Raybag</option>

          <option value="1776">Robertsonpet</option>

          <option value="1777">Ron</option>

          <option value="1778">Sadalgi</option>

          <option value="1779">Sagar</option>

          <option value="1780">Sakleshpur</option>

          <option value="1781">Saligram</option>

          <option value="1782">Sandur</option>

          <option value="1783">Sanivarsante</option>

          <option value="1784">Sankeshwar</option>

          <option value="1785">Sargur</option>

          <option value="1786">Sathyamangala</option>

          <option value="1787">Saundatti Yellamma</option>

          <option value="1788">Savanur</option>

          <option value="1789">Sedam</option>

          <option value="1790">Shahabad</option>

          <option value="1791">Shahabad A.C.C.</option>

          <option value="1792">Shahapur</option>

          <option value="1793">Shahpur</option>

          <option value="1794">Shaktinagar</option>

          <option value="1795">Shiggaon</option>

          <option value="1796">Shikarpur</option>

          <option value="1797">Shimoga</option>

          <option value="1798">Shirhatti</option>

          <option value="1799">Shorapur</option>

          <option value="1800">Shravanabelagola</option>

          <option value="1801">Shrirangapattana</option>

          <option value="1802">Siddapur</option>

          <option value="1803">Sidlaghatta</option>

          <option value="1804">Sindgi</option>

          <option value="1805">Sindhnur</option>

          <option value="1806">Sira</option>

          <option value="1807">Sirakoppa</option>

          <option value="1808">Sirsi</option>

          <option value="1809">Siruguppa</option>

          <option value="1810">Someshwar</option>

          <option value="1811">Somvarpet</option>

          <option value="1812">Sorab</option>

          <option value="1813">Sringeri</option>

          <option value="1814">Srinivaspur</option>

          <option value="1815">Sulya</option>

          <option value="1816">Suntikopa</option>

          <option value="1817">Talikota</option>

          <option value="1818">Tarikera</option>

          <option value="1819">Tekkalakota</option>

          <option value="1820">Terdal</option>

          <option value="1821">Thokur</option>

          <option value="1822">Thumbe</option>

          <option value="1823">Tiptur</option>

          <option value="1824">Tirthahalli</option>

          <option value="1825">Tirumakudal Narsipur</option>

          <option value="1826">Tonse</option>

          <option value="1827">Tumkur</option>

          <option value="1828">Turuvekere</option>

          <option value="1829">Udupi</option>

          <option value="1830">Ullal</option>

          <option value="1831">Uttarahalli</option>

          <option value="1832">Venkatapura</option>

          <option value="1833">Vijayapura</option>

          <option value="1834">Virarajendrapet</option>

          <option value="1835">Wadi</option>

          <option value="1836">Wadi A.C.C.</option>

          <option value="1837">Yadgir</option>

          <option value="1838">Yelahanka</option>

          <option value="1839">Yelandur</option>

          <option value="1840">Yelbarga</option>

          <option value="1841">Yellapur</option>

          <option value="1842">Yenagudde</option>

          <option value="1843">Adimaly</option>

          <option value="1844">Adoor</option>

          <option value="1845">Adur</option>

          <option value="1846">Akathiyur</option>

          <option value="1847">Alangad</option>

          <option value="1848">Alappuzha</option>

          <option value="1849">Aluva</option>

          <option value="1850">Ancharakandy</option>

          <option value="1851">Angamaly</option>

          <option value="1852">Aroor</option>

          <option value="1853">Arukutti</option>

          <option value="1854">Attingal</option>

          <option value="1855">Avinissery</option>

          <option value="1856">Azhikode North</option>

          <option value="1857">Azhikode South</option>

          <option value="1858">Azhiyur</option>

          <option value="1859">Balussery</option>

          <option value="1860">Bangramanjeshwar</option>

          <option value="1861">Beypur</option>

          <option value="1862">Brahmakulam</option>

          <option value="1863">Chala</option>

          <option value="1864">Chalakudi</option>

          <option value="1865">Changanacheri</option>

          <option value="1866">Chauwara</option>

          <option value="1867">Chavakkad</option>

          <option value="1868">Chelakkara</option>

          <option value="1869">Chelora</option>

          <option value="1870">Chendamangalam</option>

          <option value="1871">Chengamanad</option>

          <option value="1872">Chengannur</option>

          <option value="1873">Cheranallur</option>

          <option value="1874">Cheriyakadavu</option>

          <option value="1875">Cherthala</option>

          <option value="1876">Cherukunnu</option>

          <option value="1877">Cheruthazham</option>

          <option value="1878">Cheruvannur</option>

          <option value="1879">Cheruvattur</option>

          <option value="1880">Chevvur</option>

          <option value="1881">Chirakkal</option>

          <option value="1882">Chittur</option>

          <option value="1883">Chockli</option>

          <option value="1884">Churnikkara</option>

          <option value="1885">Dharmadam</option>

          <option value="1886">Edappal</option>

          <option value="1887">Edathala</option>

          <option value="1888">Elayavur</option>

          <option value="1889">Elur</option>

          <option value="1890">Eranholi</option>

          <option value="1891">Erattupetta</option>

          <option value="1892">Ernakulam</option>

          <option value="1893">Eruvatti</option>

          <option value="1894">Ettumanoor</option>

          <option value="1895">Feroke</option>

          <option value="1896">Guruvayur</option>

          <option value="1897">Haripad</option>

          <option value="1898">Hosabettu</option>

          <option value="1899">Idukki</option>

          <option value="1900">Iringaprom</option>

          <option value="1901">Irinjalakuda</option>

          <option value="1902">Iriveri</option>

          <option value="1903">Kadachira</option>

          <option value="1904">Kadalundi</option>

          <option value="1905">Kadamakkudy</option>

          <option value="1906">Kadirur</option>

          <option value="1907">Kadungallur</option>

          <option value="1908">Kakkodi</option>

          <option value="1909">Kalady</option>

          <option value="1910">Kalamassery</option>

          <option value="1911">Kalliasseri</option>

          <option value="1912">Kalpetta</option>

          <option value="1913">Kanhangad</option>

          <option value="1914">Kanhirode</option>

          <option value="1915">Kanjikkuzhi</option>

          <option value="1916">Kanjikode</option>

          <option value="1917">Kanjirappalli</option>

          <option value="1918">Kannadiparamba</option>

          <option value="1919">Kannangad</option>

          <option value="1920">Kannapuram</option>

          <option value="1921">Kannur</option>

          <option value="1922">Kannur Cantonment</option>

          <option value="1923">Karunagappally</option>

          <option value="1924">Karuvamyhuruthy</option>

          <option value="1925">Kasaragod</option>

          <option value="1926">Kasargod</option>

          <option value="1927">Kattappana</option>

          <option value="1928">Kayamkulam</option>

          <option value="1929">Kedamangalam</option>

          <option value="1930">Kochi</option>

          <option value="1931">Kodamthuruthu</option>

          <option value="1932">Kodungallur</option>

          <option value="1933">Koduvally</option>

          <option value="1934">Koduvayur</option>

          <option value="1935">Kokkothamangalam</option>

          <option value="1936">Kolazhy</option>

          <option value="1937">Kollam</option>

          <option value="1938">Komalapuram</option>

          <option value="1939">Koothattukulam</option>

          <option value="1940">Koratty</option>

          <option value="1941">Kothamangalam</option>

          <option value="1942">Kottarakkara</option>

          <option value="1943">Kottayam</option>

          <option value="1944">Kottayam Malabar</option>

          <option value="1945">Kottuvally</option>

          <option value="1946">Koyilandi</option>

          <option value="1947">Kozhikode</option>

          <option value="1948">Kudappanakunnu</option>

          <option value="1949">Kudlu</option>

          <option value="1950">Kumarakom</option>

          <option value="1951">Kumily</option>

          <option value="1952">Kunnamangalam</option>

          <option value="1953">Kunnamkulam</option>

          <option value="1954">Kurikkad</option>

          <option value="1955">Kurkkanchery</option>

          <option value="1956">Kuthuparamba</option>

          <option value="1957">Kuttakulam</option>

          <option value="1958">Kuttikkattur</option>

          <option value="1959">Kuttur</option>

          <option value="1960">Malappuram</option>

          <option value="1961">Mallappally</option>

          <option value="1962">Manjeri</option>

          <option value="1963">Manjeshwar</option>

          <option value="1964">Mannancherry</option>

          <option value="1965">Mannar</option>

          <option value="1966">Mannarakkat</option>

          <option value="1967">Maradu</option>

          <option value="1968">Marathakkara</option>

          <option value="1969">Marutharod</option>

          <option value="1970">Mattannur</option>

          <option value="1971">Mavelikara</option>

          <option value="1972">Mavilayi</option>

          <option value="1973">Mavur</option>

          <option value="1974">Methala</option>

          <option value="1975">Muhamma</option>

          <option value="1976">Mulavukad</option>

          <option value="1977">Mundakayam</option>

          <option value="1978">Munderi</option>

          <option value="1979">Munnar</option>

          <option value="1980">Muthakunnam</option>

          <option value="1981">Muvattupuzha</option>

          <option value="1982">Muzhappilangad</option>

          <option value="1983">Nadapuram</option>

          <option value="1984">Nadathara</option>

          <option value="1985">Narath</option>

          <option value="1986">Nattakam</option>

          <option value="1987">Nedumangad</option>

          <option value="1988">Nenmenikkara</option>

          <option value="1989">New Mahe</option>

          <option value="1990">Neyyattinkara</option>

          <option value="1991">Nileshwar</option>

          <option value="1992">Olavanna</option>

          <option value="1993">Ottapalam</option>

          <option value="1994">Ottappalam</option>

          <option value="1995">Paduvilayi</option>

          <option value="1996">Palai</option>

          <option value="1997">Palakkad</option>

          <option value="1998">Palayad</option>

          <option value="1999">Palissery</option>

          <option value="2000">Pallikkunnu</option>

          <option value="2001">Paluvai</option>

          <option value="2002">Panniyannur</option>

          <option value="2003">Pantalam</option>

          <option value="2004">Panthiramkavu</option>

          <option value="2005">Panur</option>

          <option value="2006">Pappinisseri</option>

          <option value="2007">Parassala</option>

          <option value="2008">Paravur</option>

          <option value="2009">Pathanamthitta</option>

          <option value="2010">Pathanapuram</option>

          <option value="2011">Pathiriyad</option>

          <option value="2012">Pattambi</option>

          <option value="2013">Pattiom</option>

          <option value="2014">Pavaratty</option>

          <option value="2015">Payyannur</option>

          <option value="2016">Peermade</option>

          <option value="2017">Perakam</option>

          <option value="2018">Peralasseri</option>

          <option value="2019">Peringathur</option>

          <option value="2020">Perinthalmanna</option>

          <option value="2021">Perole</option>

          <option value="2022">Perumanna</option>

          <option value="2023">Perumbaikadu</option>

          <option value="2024">Perumbavoor</option>

          <option value="2025">Pinarayi</option>

          <option value="2026">Piravam</option>

          <option value="2027">Ponnani</option>

          <option value="2028">Pottore</option>

          <option value="2029">Pudukad</option>

          <option value="2030">Punalur</option>

          <option value="2031">Puranattukara</option>

          <option value="2032">Puthunagaram</option>

          <option value="2033">Puthuppariyaram</option>

          <option value="2034">Puzhathi</option>

          <option value="2035">Ramanattukara</option>

          <option value="2036">Shoranur</option>

          <option value="2037">Sultans Battery</option>

          <option value="2038">Sulthan Bathery</option>

          <option value="2039">Talipparamba</option>

          <option value="2040">Thaikkad</option>

          <option value="2041">Thalassery</option>

          <option value="2042">Thannirmukkam</option>

          <option value="2043">Theyyalingal</option>

          <option value="2044">Thiruvalla</option>

          <option value="2045">Thiruvananthapuram</option>

          <option value="2046">Thiruvankulam</option>

          <option value="2047">Thodupuzha</option>

          <option value="2048">Thottada</option>

          <option value="2049">Thrippunithura</option>

          <option value="2050">Thrissur</option>

          <option value="2051">Tirur</option>

          <option value="2052">Udma</option>

          <option value="2053">Vadakara</option>

          <option value="2054">Vaikam</option>

          <option value="2055">Valapattam</option>

          <option value="2056">Vallachira</option>

          <option value="2057">Varam</option>

          <option value="2058">Varappuzha</option>

          <option value="2059">Varkala</option>

          <option value="2060">Vayalar</option>

          <option value="2061">Vazhakkala</option>

          <option value="2062">Venmanad</option>

          <option value="2063">Villiappally</option>

          <option value="2064">Wayanad</option>

          <option value="2065">Agethi</option>

          <option value="2066">Amini</option>

          <option value="2067">Androth Island</option>

          <option value="2068">Kavaratti</option>

          <option value="2069">Minicoy</option>

          <option value="2070">Agar</option>

          <option value="2071">Ajaigarh</option>

          <option value="2072">Akoda</option>

          <option value="2073">Akodia</option>

          <option value="2074">Alampur</option>

          <option value="2075">Alirajpur</option>

          <option value="2076">Alot</option>

          <option value="2077">Amanganj</option>

          <option value="2078">Amarkantak</option>

          <option value="2079">Amarpatan</option>

          <option value="2080">Amarwara</option>

          <option value="2081">Ambada</option>

          <option value="2082">Ambah</option>

          <option value="2083">Amla</option>

          <option value="2084">Amlai</option>

          <option value="2085">Anjad</option>

          <option value="2086">Antri</option>

          <option value="2087">Anuppur</option>

          <option value="2088">Aron</option>

          <option value="2089">Ashoknagar</option>

          <option value="2090">Ashta</option>

          <option value="2091">Babai</option>

          <option value="2092">Bada Malhera</option>

          <option value="2093">Badagaon</option>

          <option value="2094">Badagoan</option>

          <option value="2095">Badarwas</option>

          <option value="2096">Badawada</option>

          <option value="2097">Badi</option>

          <option value="2098">Badkuhi</option>

          <option value="2099">Badnagar</option>

          <option value="2100">Badnawar</option>

          <option value="2101">Badod</option>

          <option value="2102">Badoda</option>

          <option value="2103">Badra</option>

          <option value="2104">Bagh</option>

          <option value="2105">Bagli</option>

          <option value="2106">Baihar</option>

          <option value="2107">Baikunthpur</option>

          <option value="2108">Bakswaha</option>

          <option value="2109">Balaghat</option>

          <option value="2110">Baldeogarh</option>

          <option value="2111">Bamaniya</option>

          <option value="2112">Bamhani</option>

          <option value="2113">Bamor</option>

          <option value="2114">Bamora</option>

          <option value="2115">Banda</option>

          <option value="2116">Bangawan</option>

          <option value="2117">Bansatar Kheda</option>

          <option value="2118">Baraily</option>

          <option value="2119">Barela</option>

          <option value="2120">Barghat</option>

          <option value="2121">Bargi</option>

          <option value="2122">Barhi</option>

          <option value="2123">Barigarh</option>

          <option value="2124">Barwaha</option>

          <option value="2125">Barwani</option>

          <option value="2126">Basoda</option>

          <option value="2127">Begamganj</option>

          <option value="2128">Beohari</option>

          <option value="2129">Berasia</option>

          <option value="2130">Betma</option>

          <option value="2131">Betul</option>

          <option value="2132">Betul Bazar</option>

          <option value="2133">Bhainsdehi</option>

          <option value="2134">Bhamodi</option>

          <option value="2135">Bhander</option>

          <option value="2136">Bhanpura</option>

          <option value="2137">Bharveli</option>

          <option value="2138">Bhaurasa</option>

          <option value="2139">Bhavra</option>

          <option value="2140">Bhedaghat</option>

          <option value="2141">Bhikangaon</option>

          <option value="2142">Bhilakhedi</option>

          <option value="2143">Bhind</option>

          <option value="2144">Bhitarwar</option>

          <option value="2145">Bhopal</option>

          <option value="2146">Bhuibandh</option>

          <option value="2147">Biaora</option>

          <option value="2148">Bijawar</option>

          <option value="2149">Bijeypur</option>

          <option value="2150">Bijrauni</option>

          <option value="2151">Bijuri</option>

          <option value="2152">Bilaua</option>

          <option value="2153">Bilpura</option>

          <option value="2154">Bina Railway Colony</option>

          <option value="2155">Bina-Etawa</option>

          <option value="2156">Birsinghpur</option>

          <option value="2157">Boda</option>

          <option value="2158">Budhni</option>

          <option value="2159">Burhanpur</option>

          <option value="2160">Burhar</option>

          <option value="2161">Chachaura Binaganj</option>

          <option value="2162">Chakghat</option>

          <option value="2163">Chandameta Butar</option>

          <option value="2164">Chanderi</option>

          <option value="2165">Chandia</option>

          <option value="2166">Chandla</option>

          <option value="2167">Chaurai Khas</option>

          <option value="2168">Chhatarpur</option>

          <option value="2169">Chhindwara</option>

          <option value="2170">Chhota Chhindwara</option>

          <option value="2171">Chichli</option>

          <option value="2172">Chitrakut</option>

          <option value="2173">Churhat</option>

          <option value="2174">Daboh</option>

          <option value="2175">Dabra</option>

          <option value="2176">Damoh</option>

          <option value="2177">Damua</option>

          <option value="2178">Datia</option>

          <option value="2179">Deodara</option>

          <option value="2180">Deori</option>

          <option value="2181">Deori Khas</option>

          <option value="2182">Depalpur</option>

          <option value="2183">Devendranagar</option>

          <option value="2184">Devhara</option>

          <option value="2185">Dewas</option>

          <option value="2186">Dhamnod</option>

          <option value="2187">Dhana</option>

          <option value="2188">Dhanpuri</option>

          <option value="2189">Dhar</option>

          <option value="2190">Dharampuri</option>

          <option value="2191">Dighawani</option>

          <option value="2192">Diken</option>

          <option value="2193">Dindori</option>

          <option value="2194">Dola</option>

          <option value="2195">Dumar Kachhar</option>

          <option value="2196">Dungariya Chhapara</option>

          <option value="2197">Gadarwara</option>

          <option value="2198">Gairatganj</option>

          <option value="2199">Gandhi Sagar Hydel Colony</option>

          <option value="2200">Ganjbasoda</option>

          <option value="2201">Garhakota</option>

          <option value="2202">Garhi Malhara</option>

          <option value="2203">Garoth</option>

          <option value="2204">Gautapura</option>

          <option value="2205">Ghansor</option>

          <option value="2206">Ghuwara</option>

          <option value="2207">Gogaon</option>

          <option value="2208">Gogapur</option>

          <option value="2209">Gohad</option>

          <option value="2210">Gormi</option>

          <option value="2211">Govindgarh</option>

          <option value="2212">Guna</option>

          <option value="2213">Gurh</option>

          <option value="2214">Gwalior</option>

          <option value="2215">Hanumana</option>

          <option value="2216">Harda</option>

          <option value="2217">Harpalpur</option>

          <option value="2218">Harrai</option>

          <option value="2219">Harsud</option>

          <option value="2220">Hatod</option>

          <option value="2221">Hatpipalya</option>

          <option value="2222">Hatta</option>

          <option value="2223">Hindoria</option>

          <option value="2224">Hirapur</option>

          <option value="2225">Hoshangabad</option>

          <option value="2226">Ichhawar</option>

          <option value="2227">Iklehra</option>

          <option value="2228">Indergarh</option>

          <option value="2229">Indore</option>

          <option value="2230">Isagarh</option>

          <option value="2231">Itarsi</option>

          <option value="2232">Jabalpur</option>

          <option value="2233">Jabalpur Cantonment</option>

          <option value="2234">Jabalpur G.C.F</option>

          <option value="2235">Jaisinghnagar</option>

          <option value="2236">Jaithari</option>

          <option value="2237">Jaitwara</option>

          <option value="2238">Jamai</option>

          <option value="2239">Jaora</option>

          <option value="2240">Jatachhapar</option>

          <option value="2241">Jatara</option>

          <option value="2242">Jawad</option>

          <option value="2243">Jawar</option>

          <option value="2244">Jeronkhalsa</option>

          <option value="2245">Jhabua</option>

          <option value="2246">Jhundpura</option>

          <option value="2247">Jiran</option>

          <option value="2248">Jirapur</option>

          <option value="2249">Jobat</option>

          <option value="2250">Joura</option>

          <option value="2251">Kailaras</option>

          <option value="2252">Kaimur</option>

          <option value="2253">Kakarhati</option>

          <option value="2254">Kalichhapar</option>

          <option value="2255">Kanad</option>

          <option value="2256">Kannod</option>

          <option value="2257">Kantaphod</option>

          <option value="2258">Kareli</option>

          <option value="2259">Karera</option>

          <option value="2260">Kari</option>

          <option value="2261">Karnawad</option>

          <option value="2262">Karrapur</option>

          <option value="2263">Kasrawad</option>

          <option value="2264">Katangi</option>

          <option value="2265">Katni</option>

          <option value="2266">Kelhauri</option>

          <option value="2267">Khachrod</option>

          <option value="2268">Khajuraho</option>

          <option value="2269">Khamaria</option>

          <option value="2270">Khand</option>

          <option value="2271">Khandwa</option>

          <option value="2272">Khaniyadhana</option>

          <option value="2273">Khargapur</option>

          <option value="2274">Khargone</option>

          <option value="2275">Khategaon</option>

          <option value="2276">Khetia</option>

          <option value="2277">Khilchipur</option>

          <option value="2278">Khirkiya</option>

          <option value="2279">Khujner</option>

          <option value="2280">Khurai</option>

          <option value="2281">Kolaras</option>

          <option value="2282">Kotar</option>

          <option value="2283">Kothi</option>

          <option value="2284">Kotma</option>

          <option value="2285">Kukshi</option>

          <option value="2286">Kumbhraj</option>

          <option value="2287">Kurwai</option>

          <option value="2288">Lahar</option>

          <option value="2289">Lakhnadon</option>

          <option value="2290">Lateri</option>

          <option value="2291">Laundi</option>

          <option value="2292">Lidhora Khas</option>

          <option value="2293">Lodhikheda</option>

          <option value="2294">Loharda</option>

          <option value="2295">Machalpur</option>

          <option value="2296">Madhogarh</option>

          <option value="2297">Maharajpur</option>

          <option value="2298">Maheshwar</option>

          <option value="2299">Mahidpur</option>

          <option value="2300">Maihar</option>

          <option value="2301">Majholi</option>

          <option value="2302">Makronia</option>

          <option value="2303">Maksi</option>

          <option value="2304">Malaj Khand</option>

          <option value="2305">Malanpur</option>

          <option value="2306">Malhargarh</option>

          <option value="2307">Manasa</option>

          <option value="2308">Manawar</option>

          <option value="2309">Mandav</option>

          <option value="2310">Mandideep</option>

          <option value="2311">Mandla</option>

          <option value="2312">Mandleshwar</option>

          <option value="2313">Mandsaur</option>

          <option value="2314">Manegaon</option>

          <option value="2315">Mangawan</option>

          <option value="2316">Manglaya Sadak</option>

          <option value="2317">Manpur</option>

          <option value="2318">Mau</option>

          <option value="2319">Mauganj</option>

          <option value="2320">Meghnagar</option>

          <option value="2321">Mehara Gaon</option>

          <option value="2322">Mehgaon</option>

          <option value="2323">Mhaugaon</option>

          <option value="2324">Mhow</option>

          <option value="2325">Mihona</option>

          <option value="2326">Mohgaon</option>

          <option value="2327">Morar</option>

          <option value="2328">Morena</option>

          <option value="2329">Morwa</option>

          <option value="2330">Multai</option>

          <option value="2331">Mundi</option>

          <option value="2332">Mungaoli</option>

          <option value="2333">Murwara</option>

          <option value="2334">Nagda</option>

          <option value="2335">Nagod</option>

          <option value="2336">Nagri</option>

          <option value="2337">Naigarhi</option>

          <option value="2338">Nainpur</option>

          <option value="2339">Nalkheda</option>

          <option value="2340">Namli</option>

          <option value="2341">Narayangarh</option>

          <option value="2342">Narsimhapur</option>

          <option value="2343">Narsingarh</option>

          <option value="2344">Narsinghpur</option>

          <option value="2345">Narwar</option>

          <option value="2346">Nasrullaganj</option>

          <option value="2347">Naudhia</option>

          <option value="2348">Naugaon</option>

          <option value="2349">Naurozabad</option>

          <option value="2350">Neemuch</option>

          <option value="2351">Nepa Nagar</option>

          <option value="2352">Neuton Chikhli Kalan</option>

          <option value="2353">Nimach</option>

          <option value="2354">Niwari</option>

          <option value="2355">Obedullaganj</option>

          <option value="2356">Omkareshwar</option>

          <option value="2357">Orachha</option>

          <option value="2358">Ordinance Factory Itarsi</option>

          <option value="2359">Pachmarhi</option>

          <option value="2360">Pachmarhi Cantonment</option>

          <option value="2361">Pachore</option>

          <option value="2362">Palchorai</option>

          <option value="2363">Palda</option>

          <option value="2364">Palera</option>

          <option value="2365">Pali</option>

          <option value="2366">Panagar</option>

          <option value="2367">Panara</option>

          <option value="2368">Pandaria</option>

          <option value="2369">Pandhana</option>

          <option value="2370">Pandhurna</option>

          <option value="2371">Panna</option>

          <option value="2372">Pansemal</option>

          <option value="2373">Parasia</option>

          <option value="2374">Pasan</option>

          <option value="2375">Patan</option>

          <option value="2376">Patharia</option>

          <option value="2377">Pawai</option>

          <option value="2378">Petlawad</option>

          <option value="2379">Phuph Kalan</option>

          <option value="2380">Pichhore</option>

          <option value="2381">Pipariya</option>

          <option value="2382">Pipliya Mandi</option>

          <option value="2383">Piploda</option>

          <option value="2384">Pithampur</option>

          <option value="2385">Polay Kalan</option>

          <option value="2386">Porsa</option>

          <option value="2387">Prithvipur</option>

          <option value="2388">Raghogarh</option>

          <option value="2389">Rahatgarh</option>

          <option value="2390">Raisen</option>

          <option value="2391">Rajakhedi</option>

          <option value="2392">Rajgarh</option>

          <option value="2393">Rajnagar</option>

          <option value="2394">Rajpur</option>

          <option value="2395">Rampur Baghelan</option>

          <option value="2396">Rampur Naikin</option>

          <option value="2397">Rampura</option>

          <option value="2398">Ranapur</option>

          <option value="2399">Ranipura</option>

          <option value="2400">Ratangarh</option>

          <option value="2401">Ratlam</option>

          <option value="2402">Ratlam Kasba</option>

          <option value="2403">Rau</option>

          <option value="2404">Rehli</option>

          <option value="2405">Rehti</option>

          <option value="2406">Rewa</option>

          <option value="2407">Sabalgarh</option>

          <option value="2408">Sagar</option>

          <option value="2409">Sagar Cantonment</option>

          <option value="2410">Sailana</option>

          <option value="2411">Sanawad</option>

          <option value="2412">Sanchi</option>

          <option value="2413">Sanwer</option>

          <option value="2414">Sarangpur</option>

          <option value="2415">Sardarpur</option>

          <option value="2416">Sarni</option>

          <option value="2417">Satai</option>

          <option value="2418">Satna</option>

          <option value="2419">Satwas</option>

          <option value="2420">Sausar</option>

          <option value="2421">Sehore</option>

          <option value="2422">Semaria</option>

          <option value="2423">Sendhwa</option>

          <option value="2424">Seondha</option>

          <option value="2425">Seoni</option>

          <option value="2426">Seoni Malwa</option>

          <option value="2427">Sethia</option>

          <option value="2428">Shahdol</option>

          <option value="2429">Shahgarh</option>

          <option value="2430">Shahpur</option>

          <option value="2431">Shahpura</option>

          <option value="2432">Shajapur</option>

          <option value="2433">Shamgarh</option>

          <option value="2434">Sheopur</option>

          <option value="2435">Shivpuri</option>

          <option value="2436">Shujalpur</option>

          <option value="2437">Sidhi</option>

          <option value="2438">Sihora</option>

          <option value="2439">Singolo</option>

          <option value="2440">Singrauli</option>

          <option value="2441">Sinhasa</option>

          <option value="2442">Sirgora</option>

          <option value="2443">Sirmaur</option>

          <option value="2444">Sironj</option>

          <option value="2445">Sitamau</option>

          <option value="2446">Sohagpur</option>

          <option value="2447">Sonkatch</option>

          <option value="2448">Soyatkalan</option>

          <option value="2449">Suhagi</option>

          <option value="2450">Sultanpur</option>

          <option value="2451">Susner</option>

          <option value="2452">Suthaliya</option>

          <option value="2453">Tal</option>

          <option value="2454">Talen</option>

          <option value="2455">Tarana</option>

          <option value="2456">Taricharkalan</option>

          <option value="2457">Tekanpur</option>

          <option value="2458">Tendukheda</option>

          <option value="2459">Teonthar</option>

          <option value="2460">Thandia</option>

          <option value="2461">Tikamgarh</option>

          <option value="2462">Timarni</option>

          <option value="2463">Tirodi</option>

          <option value="2464">Udaipura</option>

          <option value="2465">Ujjain</option>

          <option value="2466">Ukwa</option>

          <option value="2467">Umaria</option>

          <option value="2468">Unchahara</option>

          <option value="2469">Unhel</option>

          <option value="2470">Vehicle Factory Jabalpur</option>

          <option value="2471">Vidisha</option>

          <option value="2472">Vijayraghavgarh</option>

          <option value="2473">Waraseoni</option>

          <option value="2474">Achalpur</option>

          <option value="2475">Aheri</option>

          <option value="2476">Ahmadnagar Cantonment</option>

          <option value="2477">Ahmadpur</option>

          <option value="2478">Ahmednagar</option>

          <option value="2479">Ajra</option>

          <option value="2480">Akalkot</option>

          <option value="2481">Akkalkuwa</option>

          <option value="2482">Akola</option>

          <option value="2483">Akot</option>

          <option value="2484">Alandi</option>

          <option value="2485">Alibag</option>

          <option value="2486">Allapalli</option>

          <option value="2487">Alore</option>

          <option value="2488">Amalner</option>

          <option value="2489">Ambad</option>

          <option value="2490">Ambajogai</option>

          <option value="2491">Ambernath</option>

          <option value="2492">Ambivali Tarf Wankhal</option>

          <option value="2493">Amgaon</option>

          <option value="2494">Amravati</option>

          <option value="2495">Anjangaon</option>

          <option value="2496">Arvi</option>

          <option value="2497">Ashta</option>

          <option value="2498">Ashti</option>

          <option value="2499">Aurangabad</option>

          <option value="2500">Aurangabad Cantonment</option>

          <option value="2501">Ausa</option>

          <option value="2502">Babhulgaon</option>

          <option value="2503">Badlapur</option>

          <option value="2504">Balapur</option>

          <option value="2505">Ballarpur</option>

          <option value="2506">Baramati</option>

          <option value="2507">Barshi</option>

          <option value="2508">Basmat</option>

          <option value="2509">Beed</option>

          <option value="2510">Bhadravati</option>

          <option value="2511">Bhagur</option>

          <option value="2512">Bhandara</option>

          <option value="2513">Bhigvan</option>

          <option value="2514">Bhingar</option>

          <option value="2515">Bhiwandi</option>

          <option value="2516">Bhokhardan</option>

          <option value="2517">Bhor</option>

          <option value="2518">Bhosari</option>

          <option value="2519">Bhum</option>

          <option value="2520">Bhusawal</option>

          <option value="2521">Bid</option>

          <option value="2522">Biloli</option>

          <option value="2523">Birwadi</option>

          <option value="2524">Boisar</option>

          <option value="2525">Bop Khel</option>

          <option value="2526">Brahmapuri</option>

          <option value="2527">Budhgaon</option>

          <option value="2528">Buldana</option>

          <option value="2529">Buldhana</option>

          <option value="2530">Butibori</option>

          <option value="2531">Chakan</option>

          <option value="2532">Chalisgaon</option>

          <option value="2533">Chandrapur</option>

          <option value="2534">Chandur</option>

          <option value="2535">Chandur Bazar</option>

          <option value="2536">Chandvad</option>

          <option value="2537">Chicholi</option>

          <option value="2538">Chikhala</option>

          <option value="2539">Chikhaldara</option>

          <option value="2540">Chikhli</option>

          <option value="2541">Chinchani</option>

          <option value="2542">Chinchwad</option>

          <option value="2543">Chiplun</option>

          <option value="2544">Chopda</option>

          <option value="2545">Dabhol</option>

          <option value="2546">Dahance</option>

          <option value="2547">Dahanu</option>

          <option value="2548">Daharu</option>

          <option value="2549">Dapoli Camp</option>

          <option value="2550">Darwa</option>

          <option value="2551">Daryapur</option>

          <option value="2552">Dattapur</option>

          <option value="2553">Daund</option>

          <option value="2554">Davlameti</option>

          <option value="2555">Deglur</option>

          <option value="2556">Dehu Road</option>

          <option value="2557">Deolali</option>

          <option value="2558">Deolali Pravara</option>

          <option value="2559">Deoli</option>

          <option value="2560">Desaiganj</option>

          <option value="2561">Deulgaon Raja</option>

          <option value="2562">Dewhadi</option>

          <option value="2563">Dharangaon</option>

          <option value="2564">Dharmabad</option>

          <option value="2565">Dharur</option>

          <option value="2566">Dhatau</option>

          <option value="2567">Dhule</option>

          <option value="2568">Digdoh</option>

          <option value="2569">Diglur</option>

          <option value="2570">Digras</option>

          <option value="2571">Dombivli</option>

          <option value="2572">Dondaicha</option>

          <option value="2573">Dudhani</option>

          <option value="2574">Durgapur</option>

          <option value="2575">Dyane</option>

          <option value="2576">Edandol</option>

          <option value="2577">Eklahare</option>

          <option value="2578">Faizpur</option>

          <option value="2579">Fekari</option>

          <option value="2580">Gadchiroli</option>

          <option value="2581">Gadhinghaj</option>

          <option value="2582">Gandhi Nagar</option>

          <option value="2583">Ganeshpur</option>

          <option value="2584">Gangakher</option>

          <option value="2585">Gangapur</option>

          <option value="2586">Gevrai</option>

          <option value="2587">Ghatanji</option>

          <option value="2588">Ghoti</option>

          <option value="2589">Ghugus</option>

          <option value="2590">Ghulewadi</option>

          <option value="2591">Godoli</option>

          <option value="2592">Gondia</option>

          <option value="2593">Guhagar</option>

          <option value="2594">Hadgaon</option>

          <option value="2595">Harnai Beach</option>

          <option value="2596">Hinganghat</option>

          <option value="2597">Hingoli</option>

          <option value="2598">Hupari</option>

          <option value="2599">Ichalkaranji</option>

          <option value="2600">Igatpuri</option>

          <option value="2601">Indapur</option>

          <option value="2602">Jaisinghpur</option>

          <option value="2603">Jalgaon</option>

          <option value="2604">Jalna</option>

          <option value="2605">Jamkhed</option>

          <option value="2606">Jawhar</option>

          <option value="2607">Jaysingpur</option>

          <option value="2608">Jejuri</option>

          <option value="2609">Jintur</option>

          <option value="2610">Junnar</option>

          <option value="2611">Kabnur</option>

          <option value="2612">Kagal</option>

          <option value="2613">Kalamb</option>

          <option value="2614">Kalamnuri</option>

          <option value="2615">Kalas</option>

          <option value="2616">Kalmeshwar</option>

          <option value="2617">Kalundre</option>

          <option value="2618">Kalyan</option>

          <option value="2619">Kamthi</option>

          <option value="2620">Kamthi Cantonment</option>

          <option value="2621">Kandari</option>

          <option value="2622">Kandhar</option>

          <option value="2623">Kandri</option>

          <option value="2624">Kandri II</option>

          <option value="2625">Kanhan</option>

          <option value="2626">Kankavli</option>

          <option value="2627">Kannad</option>

          <option value="2628">Karad</option>

          <option value="2629">Karanja</option>

          <option value="2630">Karanje Tarf</option>

          <option value="2631">Karivali</option>

          <option value="2632">Karjat</option>

          <option value="2633">Karmala</option>

          <option value="2634">Kasara Budruk</option>

          <option value="2635">Katai</option>

          <option value="2636">Katkar</option>

          <option value="2637">Katol</option>

          <option value="2638">Kegaon</option>

          <option value="2639">Khadkale</option>

          <option value="2640">Khadki</option>

          <option value="2641">Khamgaon</option>

          <option value="2642">Khapa</option>

          <option value="2643">Kharadi</option>

          <option value="2644">Kharakvasla</option>

          <option value="2645">Khed</option>

          <option value="2646">Kherdi</option>

          <option value="2647">Khoni</option>

          <option value="2648">Khopoli</option>

          <option value="2649">Khuldabad</option>

          <option value="2650">Kinwat</option>

          <option value="2651">Kodoli</option>

          <option value="2652">Kolhapur</option>

          <option value="2653">Kon</option>

          <option value="2654">Kondumal</option>

          <option value="2655">Kopargaon</option>

          <option value="2656">Kopharad</option>

          <option value="2657">Koradi</option>

          <option value="2658">Koregaon</option>

          <option value="2659">Korochi</option>

          <option value="2660">Kudal</option>

          <option value="2661">Kundaim</option>

          <option value="2662">Kundalwadi</option>

          <option value="2663">Kurandvad</option>

          <option value="2664">Kurduvadi</option>

          <option value="2665">Kusgaon Budruk</option>

          <option value="2666">Lanja</option>

          <option value="2667">Lasalgaon</option>

          <option value="2668">Latur</option>

          <option value="2669">Loha</option>

          <option value="2670">Lohegaon</option>

          <option value="2671">Lonar</option>

          <option value="2672">Lonavala</option>

          <option value="2673">Madhavnagar</option>

          <option value="2674">Mahabaleshwar</option>

          <option value="2675">Mahad</option>

          <option value="2676">Mahadula</option>

          <option value="2677">Maindargi</option>

          <option value="2678">Majalgaon</option>

          <option value="2679">Malegaon</option>

          <option value="2680">Malgaon</option>

          <option value="2681">Malkapur</option>

          <option value="2682">Malwan</option>

          <option value="2683">Manadur</option>

          <option value="2684">Manchar</option>

          <option value="2685">Mangalvedhe</option>

          <option value="2686">Mangrul Pir</option>

          <option value="2687">Manmad</option>

          <option value="2688">Manor</option>

          <option value="2689">Mansar</option>

          <option value="2690">Manwath</option>

          <option value="2691">Mapuca</option>

          <option value="2692">Matheran</option>

          <option value="2693">Mehkar</option>

          <option value="2694">Mhasla</option>

          <option value="2695">Mhaswad</option>

          <option value="2696">Mira Bhayandar</option>

          <option value="2697">Miraj</option>

          <option value="2698">Mohpa</option>

          <option value="2699">Mohpada</option>

          <option value="2700">Moram</option>

          <option value="2701">Morshi</option>

          <option value="2702">Mowad</option>

          <option value="2703">Mudkhed</option>

          <option value="2704">Mukhed</option>

          <option value="2705">Mul</option>

          <option value="2706">Mulshi</option>

          <option value="2707">Mumbai</option>

          <option value="2708">Murbad</option>

          <option value="2709">Murgud</option>

          <option value="2710">Murtijapur</option>

          <option value="2711">Murud</option>

          <option value="2712">Nachane</option>

          <option value="2713">Nagardeole</option>

          <option value="2714">Nagothane</option>

          <option value="2715">Nagpur</option>

          <option value="2716">Nakoda</option>

          <option value="2717">Nalasopara</option>

          <option value="2718">Naldurg</option>

          <option value="2719">Nanded</option>

          <option value="2720">Nandgaon</option>

          <option value="2721">Nandura</option>

          <option value="2722">Nandurbar</option>

          <option value="2723">Narkhed</option>

          <option value="2724">Nashik</option>

          <option value="2725">Navapur</option>

          <option value="2726">Navi Mumbai</option>

          <option value="2727">Navi Mumbai Panvel</option>

          <option value="2728">Neral</option>

          <option value="2729">Nigdi</option>

          <option value="2730">Nilanga</option>

          <option value="2731">Nildoh</option>

          <option value="2732">Nimbhore</option>

          <option value="2733">Ojhar</option>

          <option value="2734">Osmanabad</option>

          <option value="2735">Pachgaon</option>

          <option value="2736">Pachora</option>

          <option value="2737">Padagha</option>

          <option value="2738">Paithan</option>

          <option value="2739">Palghar</option>

          <option value="2740">Pali</option>

          <option value="2741">Panchgani</option>

          <option value="2742">Pandhakarwada</option>

          <option value="2743">Pandharpur</option>

          <option value="2744">Panhala</option>

          <option value="2745">Panvel</option>

          <option value="2746">Paranda</option>

          <option value="2747">Parbhani</option>

          <option value="2748">Parli</option>

          <option value="2749">Parola</option>

          <option value="2750">Partur</option>

          <option value="2751">Pasthal</option>

          <option value="2752">Patan</option>

          <option value="2753">Pathardi</option>

          <option value="2754">Pathri</option>

          <option value="2755">Patur</option>

          <option value="2756">Pawni</option>

          <option value="2757">Pen</option>

          <option value="2758">Pethumri</option>

          <option value="2759">Phaltan</option>

          <option value="2760">Pimpri</option>

          <option value="2761">Poladpur</option>

          <option value="2762">Pulgaon</option>

          <option value="2763">Pune</option>

          <option value="2764">Pune Cantonment</option>

          <option value="2765">Purna</option>

          <option value="2766">Purushottamnagar</option>

          <option value="2767">Pusad</option>

          <option value="2768">Rahimatpur</option>

          <option value="2769">Rahta Pimplas</option>

          <option value="2770">Rahuri</option>

          <option value="2771">Raigad</option>

          <option value="2772">Rajapur</option>

          <option value="2773">Rajgurunagar</option>

          <option value="2774">Rajur</option>

          <option value="2775">Rajura</option>

          <option value="2776">Ramtek</option>

          <option value="2777">Ratnagiri</option>

          <option value="2778">Ravalgaon</option>

          <option value="2779">Raver</option>

          <option value="2780">Revadanda</option>

          <option value="2781">Risod</option>

          <option value="2782">Roha Ashtami</option>

          <option value="2783">Sakri</option>

          <option value="2784">Sandor</option>

          <option value="2785">Sangamner</option>

          <option value="2786">Sangli</option>

          <option value="2787">Sangole</option>

          <option value="2788">Sasti</option>

          <option value="2789">Sasvad</option>

          <option value="2790">Satana</option>

          <option value="2791">Satara</option>

          <option value="2792">Savantvadi</option>

          <option value="2793">Savda</option>

          <option value="2794">Savner</option>

          <option value="2795">Sawari Jawharnagar</option>

          <option value="2796">Selu</option>

          <option value="2797">Shahada</option>

          <option value="2798">Shahapur</option>

          <option value="2799">Shegaon</option>

          <option value="2800">Shelar</option>

          <option value="2801">Shendurjana</option>

          <option value="2802">Shirdi</option>

          <option value="2803">Shirgaon</option>

          <option value="2804">Shirpur</option>

          <option value="2805">Shirur</option>

          <option value="2806">Shirwal</option>

          <option value="2807">Shivatkar</option>

          <option value="2808">Shrigonda</option>

          <option value="2809">Shrirampur</option>

          <option value="2810">Shrirampur Rural</option>

          <option value="2811">Sillewada</option>

          <option value="2812">Sillod</option>

          <option value="2813">Sindhudurg</option>

          <option value="2814">Sindi</option>

          <option value="2815">Sindi Turf Hindnagar</option>

          <option value="2816">Sindkhed Raja</option>

          <option value="2817">Singnapur</option>

          <option value="2818">Sinnar</option>

          <option value="2819">Sirur</option>

          <option value="2820">Sitasawangi</option>

          <option value="2821">Solapur</option>

          <option value="2822">Sonai</option>

          <option value="2823">Sonegaon</option>

          <option value="2824">Soyagaon</option>

          <option value="2825">Srivardhan</option>

          <option value="2826">Surgana</option>

          <option value="2827">Talegaon Dabhade</option>

          <option value="2828">Taloda</option>

          <option value="2829">Taloja</option>

          <option value="2830">Talwade</option>

          <option value="2831">Tarapur</option>

          <option value="2832">Tasgaon</option>

          <option value="2833">Tathavade</option>

          <option value="2834">Tekadi</option>

          <option value="2835">Telhara</option>

          <option value="2836">Thane</option>

          <option value="2837">Tirira</option>

          <option value="2838">Totaladoh</option>

          <option value="2839">Trimbak</option>

          <option value="2840">Tuljapur</option>

          <option value="2841">Tumsar</option>

          <option value="2842">Uchgaon</option>

          <option value="2843">Udgir</option>

          <option value="2844">Ulhasnagar</option>

          <option value="2845">Umarga</option>

          <option value="2846">Umarkhed</option>

          <option value="2847">Umarsara</option>

          <option value="2848">Umbar Pada Nandade</option>

          <option value="2849">Umred</option>

          <option value="2850">Umri Pragane Balapur</option>

          <option value="2851">Uran</option>

          <option value="2852">Uran Islampur</option>

          <option value="2853">Utekhol</option>

          <option value="2854">Vada</option>

          <option value="2855">Vadgaon</option>

          <option value="2856">Vadgaon Kasba</option>

          <option value="2857">Vaijapur</option>

          <option value="2858">Vanvadi</option>

          <option value="2859">Varangaon</option>

          <option value="2860">Vasai</option>

          <option value="2861">Vasantnagar</option>

          <option value="2862">Vashind</option>

          <option value="2863">Vengurla</option>

          <option value="2864">Virar</option>

          <option value="2865">Visapur</option>

          <option value="2866">Vite</option>

          <option value="2867">Vithalwadi</option>

          <option value="2868">Wadi</option>

          <option value="2869">Waghapur</option>

          <option value="2870">Wai</option>

          <option value="2871">Wajegaon</option>

          <option value="2872">Walani</option>

          <option value="2873">Wanadongri</option>

          <option value="2874">Wani</option>

          <option value="2875">Wardha</option>

          <option value="2876">Warora</option>

          <option value="2877">Warthi</option>

          <option value="2878">Warud</option>

          <option value="2879">Washim</option>

          <option value="2880">Yaval</option>

          <option value="2881">Yavatmal</option>

          <option value="2882">Yeola</option>

          <option value="2883">Yerkheda</option>

          <option value="2884">Andro</option>

          <option value="2885">Bijoy Govinda</option>

          <option value="2886">Bishnupur</option>

          <option value="2887">Churachandpur</option>

          <option value="2888">Heriok</option>

          <option value="2889">Imphal</option>

          <option value="2890">Jiribam</option>

          <option value="2891">Kakching</option>

          <option value="2892">Kakching Khunou</option>

          <option value="2893">Khongman</option>

          <option value="2894">Kumbi</option>

          <option value="2895">Kwakta</option>

          <option value="2896">Lamai</option>

          <option value="2897">Lamjaotongba</option>

          <option value="2898">Lamshang</option>

          <option value="2899">Lilong</option>

          <option value="2900">Mayang Imphal</option>

          <option value="2901">Moirang</option>

          <option value="2902">Moreh</option>

          <option value="2903">Nambol</option>

          <option value="2904">Naoriya Pakhanglakpa</option>

          <option value="2905">Ningthoukhong</option>

          <option value="2906">Oinam</option>

          <option value="2907">Porompat</option>

          <option value="2908">Samurou</option>

          <option value="2909">Sekmai Bazar</option>

          <option value="2910">Senapati</option>

          <option value="2911">Sikhong Sekmai</option>

          <option value="2912">Sugnu</option>

          <option value="2913">Thongkhong Laxmi Bazar</option>

          <option value="2914">Thoubal</option>

          <option value="2915">Torban</option>

          <option value="2916">Wangjing</option>

          <option value="2917">Wangoi</option>

          <option value="2918">Yairipok</option>

          <option value="2919">Baghmara</option>

          <option value="2920">Cherrapunji</option>

          <option value="2921">Jawai</option>

          <option value="2922">Madanrting</option>

          <option value="2923">Mairang</option>

          <option value="2924">Mawlai</option>

          <option value="2925">Nongmynsong</option>

          <option value="2926">Nongpoh</option>

          <option value="2927">Nongstoin</option>

          <option value="2928">Nongthymmai</option>

          <option value="2929">Pynthorumkhrah</option>

          <option value="2930">Resubelpara</option>

          <option value="2931">Shillong</option>

          <option value="2932">Shillong Cantonment</option>

          <option value="2933">Tura</option>

          <option value="2934">Williamnagar</option>

          <option value="2935">Aizawl</option>

          <option value="2936">Bairabi</option>

          <option value="2937">Biate</option>

          <option value="2938">Champhai</option>

          <option value="2939">Darlawn</option>

          <option value="2940">Hnahthial</option>

          <option value="2941">Kawnpui</option>

          <option value="2942">Khawhai</option>

          <option value="2943">Khawzawl</option>

          <option value="2944">Kolasib</option>

          <option value="2945">Lengpui</option>

          <option value="2946">Lunglei</option>

          <option value="2947">Mamit</option>

          <option value="2948">North Vanlaiphai</option>

          <option value="2949">Saiha</option>

          <option value="2950">Sairang</option>

          <option value="2951">Saitul</option>

          <option value="2952">Serchhip</option>

          <option value="2953">Thenzawl</option>

          <option value="2954">Tlabung</option>

          <option value="2955">Vairengte</option>

          <option value="2956">Zawlnuam</option>

          <option value="2957">Chumukedima</option>

          <option value="2958">Dimapur</option>

          <option value="2959">Kohima</option>

          <option value="2960">Mokokchung</option>

          <option value="2961">Mon</option>

          <option value="2962">Phek</option>

          <option value="2963">Tuensang</option>

          <option value="2964">Wokha</option>

          <option value="2965">Zunheboto</option>

          <option value="2966">Anandapur</option>

          <option value="2967">Angul</option>

          <option value="2968">Aska</option>

          <option value="2969">Athgarh</option>

          <option value="2970">Athmallik</option>

          <option value="2971">Balagoda</option>

          <option value="2972">Balangir</option>

          <option value="2973">Balasore</option>

          <option value="2974">Baleshwar</option>

          <option value="2975">Balimeta</option>

          <option value="2976">Balugaon</option>

          <option value="2977">Banapur</option>

          <option value="2978">Bangura</option>

          <option value="2979">Banki</option>

          <option value="2980">Banposh</option>

          <option value="2981">Barbil</option>

          <option value="2982">Bargarh</option>

          <option value="2983">Baripada</option>

          <option value="2984">Barpali</option>

          <option value="2985">Basudebpur</option>

          <option value="2986">Baudh</option>

          <option value="2987">Belagachhia</option>

          <option value="2988">Belaguntha</option>

          <option value="2989">Belpahar</option>

          <option value="2990">Berhampur</option>

          <option value="2991">Bhadrak</option>

          <option value="2992">Bhanjanagar</option>

          <option value="2993">Bhawanipatna</option>

          <option value="2994">Bhuban</option>

          <option value="2995">Bhubaneswar</option>

          <option value="2996">Binika</option>

          <option value="2997">Birmitrapur</option>

          <option value="2998">Bishama Katek</option>

          <option value="2999">Bolangir</option>

          <option value="3000">Brahmapur</option>

          <option value="3001">Brajrajnagar</option>

          <option value="3002">Buguda</option>

          <option value="3003">Burla</option>

          <option value="3004">Byasanagar</option>

          <option value="3005">Champua</option>

          <option value="3006">Chandapur</option>

          <option value="3007">Chandbali</option>

          <option value="3008">Chandili</option>

          <option value="3009">Charibatia</option>

          <option value="3010">Chatrapur</option>

          <option value="3011">Chikitigarh</option>

          <option value="3012">Chitrakonda</option>

          <option value="3013">Choudwar</option>

          <option value="3014">Cuttack</option>

          <option value="3015">Dadhapatna</option>

          <option value="3016">Daitari</option>

          <option value="3017">Damanjodi</option>

          <option value="3018">Deogarh</option>

          <option value="3019">Deracolliery</option>

          <option value="3020">Dhamanagar</option>

          <option value="3021">Dhenkanal</option>

          <option value="3022">Digapahandi</option>

          <option value="3023">Dungamal</option>

          <option value="3024">Fertilizer Corporation of Indi</option>

          <option value="3025">Ganjam</option>

          <option value="3026">Ghantapada</option>

          <option value="3027">Gopalpur</option>

          <option value="3028">Gudari</option>

          <option value="3029">Gunupur</option>

          <option value="3030">Hatibandha</option>

          <option value="3031">Hinjilikatu</option>

          <option value="3032">Hirakud</option>

          <option value="3033">Jagatsinghapur</option>

          <option value="3034">Jajpur</option>

          <option value="3035">Jalda</option>

          <option value="3036">Jaleswar</option>

          <option value="3037">Jatni</option>

          <option value="3038">Jaypur</option>

          <option value="3039">Jeypore</option>

          <option value="3040">Jharsuguda</option>

          <option value="3041">Jhumpura</option>

          <option value="3042">Joda</option>

          <option value="3043">Junagarh</option>

          <option value="3044">Kamakhyanagar</option>

          <option value="3045">Kantabanji</option>

          <option value="3046">Kantilo</option>

          <option value="3047">Karanja</option>

          <option value="3048">Kashinagara</option>

          <option value="3049">Kataka</option>

          <option value="3050">Kavisuryanagar</option>

          <option value="3051">Kendrapara</option>

          <option value="3052">Kendujhar</option>

          <option value="3053">Keonjhar</option>

          <option value="3054">Kesinga</option>

          <option value="3055">Khaliapali</option>

          <option value="3056">Khalikote</option>

          <option value="3057">Khandaparha</option>

          <option value="3058">Kharhial</option>

          <option value="3059">Kharhial Road</option>

          <option value="3060">Khatiguda</option>

          <option value="3061">Khurda</option>

          <option value="3062">Kochinda</option>

          <option value="3063">Kodala</option>

          <option value="3064">Konark</option>

          <option value="3065">Koraput</option>

          <option value="3066">Kotaparh</option>

          <option value="3067">Lanjigarh</option>

          <option value="3068">Lattikata</option>

          <option value="3069">Makundapur</option>

          <option value="3070">Malkangiri</option>

          <option value="3071">Mukhiguda</option>

          <option value="3072">Nabarangpur</option>

          <option value="3073">Nalco</option>

          <option value="3074">Naurangapur</option>

          <option value="3075">Nayagarh</option>

          <option value="3076">Nilagiri</option>

          <option value="3077">Nimaparha</option>

          <option value="3078">Nuapada</option>

          <option value="3079">Nuapatna</option>

          <option value="3080">OCL Industrialship</option>

          <option value="3081">Padampur</option>

          <option value="3082">Paradip</option>

          <option value="3083">Paradwip</option>

          <option value="3084">Parlakimidi</option>

          <option value="3085">Patamundai</option>

          <option value="3086">Patnagarh</option>

          <option value="3087">Phulabani</option>

          <option value="3088">Pipili</option>

          <option value="3089">Polasara</option>

          <option value="3090">Pratapsasan</option>

          <option value="3091">Puri</option>

          <option value="3092">Purushottampur</option>

          <option value="3093">Rairangpur</option>

          <option value="3094">Raj Gangpur</option>

          <option value="3095">Rambha</option>

          <option value="3096">Raurkela</option>

          <option value="3097">Raurkela Civil Township</option>

          <option value="3098">Rayagada</option>

          <option value="3099">Redhakhol</option>

          <option value="3100">Remuna</option>

          <option value="3101">Rengali</option>

          <option value="3102">Rourkela</option>

          <option value="3103">Sambalpur</option>

          <option value="3104">Sinapali</option>

          <option value="3105">Sonepur</option>

          <option value="3106">Sorada</option>

          <option value="3107">Soro</option>

          <option value="3108">Sunabeda</option>

          <option value="3109">Sundargarh</option>

          <option value="3110">Talcher</option>

          <option value="3111">Talcher Thermal Power Station </option>

          <option value="3112">Tarabha</option>

          <option value="3113">Tensa</option>

          <option value="3114">Titlagarh</option>

          <option value="3115">Udala</option>

          <option value="3116">Udayagiri</option>

          <option value="3117">Umarkot</option>

          <option value="3118">Vikrampur</option>

          <option value="3119">Ariankuppam</option>

          <option value="3120">Karaikal</option>

          <option value="3121">Kurumbapet</option>

          <option value="3122">Mahe</option>

          <option value="3123">Ozhukarai</option>

          <option value="3124">Pondicherry</option>

          <option value="3125">Villianur</option>

          <option value="3126">Yanam</option>

          <option value="3127">Abohar</option>

          <option value="3128">Adampur</option>

          <option value="3129">Ahmedgarh</option>

          <option value="3130">Ajnala</option>

          <option value="3131">Akalgarh</option>

          <option value="3132">Alawalpur</option>

          <option value="3133">Amloh</option>

          <option value="3134">Amritsar</option>

          <option value="3135">Amritsar Cantonment</option>

          <option value="3136">Anandpur Sahib</option>

          <option value="3137">Badhni Kalan</option>

          <option value="3138">Bagh Purana</option>

          <option value="3139">Balachaur</option>

          <option value="3140">Banaur</option>

          <option value="3141">Banga</option>

          <option value="3142">Banur</option>

          <option value="3143">Baretta</option>

          <option value="3144">Bariwala</option>

          <option value="3145">Barnala</option>

          <option value="3146">Bassi Pathana</option>

          <option value="3147">Batala</option>

          <option value="3148">Bathinda</option>

          <option value="3149">Begowal</option>

          <option value="3150">Behrampur</option>

          <option value="3151">Bhabat</option>

          <option value="3152">Bhadur</option>

          <option value="3153">Bhankharpur</option>

          <option value="3154">Bharoli Kalan</option>

          <option value="3155">Bhawanigarh</option>

          <option value="3156">Bhikhi</option>

          <option value="3157">Bhikhiwind</option>

          <option value="3158">Bhisiana</option>

          <option value="3159">Bhogpur</option>

          <option value="3160">Bhuch</option>

          <option value="3161">Bhulath</option>

          <option value="3162">Budha Theh</option>

          <option value="3163">Budhlada</option>

          <option value="3164">Chima</option>

          <option value="3165">Chohal</option>

          <option value="3166">Dasuya</option>

          <option value="3167">Daulatpur</option>

          <option value="3168">Dera Baba Nanak</option>

          <option value="3169">Dera Bassi</option>

          <option value="3170">Dhanaula</option>

          <option value="3171">Dharam Kot</option>

          <option value="3172">Dhariwal</option>

          <option value="3173">Dhilwan</option>

          <option value="3174">Dhuri</option>

          <option value="3175">Dinanagar</option>

          <option value="3176">Dirba</option>

          <option value="3177">Doraha</option>

          <option value="3178">Faridkot</option>

          <option value="3179">Fateh Nangal</option>

          <option value="3180">Fatehgarh Churian</option>

          <option value="3181">Fatehgarh Sahib</option>

          <option value="3182">Fazilka</option>

          <option value="3183">Firozpur</option>

          <option value="3184">Firozpur Cantonment</option>

          <option value="3185">Gardhiwala</option>

          <option value="3186">Garhshankar</option>

          <option value="3187">Ghagga</option>

          <option value="3188">Ghanaur</option>

          <option value="3189">Giddarbaha</option>

          <option value="3190">Gobindgarh</option>

          <option value="3191">Goniana</option>

          <option value="3192">Goraya</option>

          <option value="3193">Gurdaspur</option>

          <option value="3194">Guru Har Sahai</option>

          <option value="3195">Hajipur</option>

          <option value="3196">Handiaya</option>

          <option value="3197">Hariana</option>

          <option value="3198">Hoshiarpur</option>

          <option value="3199">Hussainpur</option>

          <option value="3200">Jagraon</option>

          <option value="3201">Jaitu</option>

          <option value="3202">Jalalabad</option>

          <option value="3203">Jalandhar</option>

          <option value="3204">Jalandhar Cantonment</option>

          <option value="3205">Jandiala</option>

          <option value="3206">Jugial</option>

          <option value="3207">Kalanaur</option>

          <option value="3208">Kapurthala</option>

          <option value="3209">Karoran</option>

          <option value="3210">Kartarpur</option>

          <option value="3211">Khamanon</option>

          <option value="3212">Khanauri</option>

          <option value="3213">Khanna</option>

          <option value="3214">Kharar</option>

          <option value="3215">Khem Karan</option>

          <option value="3216">Kot Fatta</option>

          <option value="3217">Kot Isa Khan</option>

          <option value="3218">Kot Kapura</option>

          <option value="3219">Kotkapura</option>

          <option value="3220">Kurali</option>

          <option value="3221">Lalru</option>

          <option value="3222">Lehra Gaga</option>

          <option value="3223">Lodhian Khas</option>

          <option value="3224">Longowal</option>

          <option value="3225">Ludhiana</option>

          <option value="3226">Machhiwara</option>

          <option value="3227">Mahilpur</option>

          <option value="3228">Majitha</option>

          <option value="3229">Makhu</option>

          <option value="3230">Malaut</option>

          <option value="3231">Malerkotla</option>

          <option value="3232">Maloud</option>

          <option value="3233">Mandi Gobindgarh</option>

          <option value="3234">Mansa</option>

          <option value="3235">Maur</option>

          <option value="3236">Moga</option>

          <option value="3237">Mohali</option>

          <option value="3238">Moonak</option>

          <option value="3239">Morinda</option>

          <option value="3240">Mukerian</option>

          <option value="3241">Muktsar</option>

          <option value="3242">Mullanpur Dakha</option>

          <option value="3243">Mullanpur Garibdas</option>

          <option value="3244">Munak</option>

          <option value="3245">Muradpura</option>

          <option value="3246">Nabha</option>

          <option value="3247">Nakodar</option>

          <option value="3248">Nangal</option>

          <option value="3249">Nawashahr</option>

          <option value="3250">Naya Nangal</option>

          <option value="3251">Nehon</option>

          <option value="3252">Nurmahal</option>

          <option value="3253">Pathankot</option>

          <option value="3254">Patiala</option>

          <option value="3255">Patti</option>

          <option value="3256">Pattran</option>

          <option value="3257">Payal</option>

          <option value="3258">Phagwara</option>

          <option value="3259">Phillaur</option>

          <option value="3260">Qadian</option>

          <option value="3261">Rahon</option>

          <option value="3262">Raikot</option>

          <option value="3263">Raja Sansi</option>

          <option value="3264">Rajpura</option>

          <option value="3265">Ram Das</option>

          <option value="3266">Raman</option>

          <option value="3267">Rampura</option>

          <option value="3268">Rayya</option>

          <option value="3269">Rupnagar</option>

          <option value="3270">Rurki Kasba</option>

          <option value="3271">Sahnewal</option>

          <option value="3272">Samana</option>

          <option value="3273">Samrala</option>

          <option value="3274">Sanaur</option>

          <option value="3275">Sangat</option>

          <option value="3276">Sangrur</option>

          <option value="3277">Sansarpur</option>

          <option value="3278">Sardulgarh</option>

          <option value="3279">Shahkot</option>

          <option value="3280">Sham Churasi</option>

          <option value="3281">Shekhpura</option>

          <option value="3282">Sirhind</option>

          <option value="3283">Sri Hargobindpur</option>

          <option value="3284">Sujanpur</option>

          <option value="3285">Sultanpur Lodhi</option>

          <option value="3286">Sunam</option>

          <option value="3287">Talwandi Bhai</option>

          <option value="3288">Talwara</option>

          <option value="3289">Tappa</option>

          <option value="3290">Tarn Taran</option>

          <option value="3291">Urmar Tanda</option>

          <option value="3292">Zira</option>

          <option value="3293">Zirakpur</option>

          <option value="3294">Abu Road</option>

          <option value="3295">Ajmer</option>

          <option value="3296">Aklera</option>

          <option value="3297">Alwar</option>

          <option value="3298">Amet</option>

          <option value="3299">Antah</option>

          <option value="3300">Anupgarh</option>

          <option value="3301">Asind</option>

          <option value="3302">Bagar</option>

          <option value="3303">Bagru</option>

          <option value="3304">Bahror</option>

          <option value="3305">Bakani</option>

          <option value="3306">Bali</option>

          <option value="3307">Balotra</option>

          <option value="3308">Bandikui</option>

          <option value="3309">Banswara</option>

          <option value="3310">Baran</option>

          <option value="3311">Bari</option>

          <option value="3312">Bari Sadri</option>

          <option value="3313">Barmer</option>

          <option value="3314">Basi</option>

          <option value="3315">Basni Belima</option>

          <option value="3316">Baswa</option>

          <option value="3317">Bayana</option>

          <option value="3318">Beawar</option>

          <option value="3319">Begun</option>

          <option value="3320">Bhadasar</option>

          <option value="3321">Bhadra</option>

          <option value="3322">Bhalariya</option>

          <option value="3323">Bharatpur</option>

          <option value="3324">Bhasawar</option>

          <option value="3325">Bhawani Mandi</option>

          <option value="3326">Bhawri</option>

          <option value="3327">Bhilwara</option>

          <option value="3328">Bhindar</option>

          <option value="3329">Bhinmal</option>

          <option value="3330">Bhiwadi</option>

          <option value="3331">Bijoliya Kalan</option>

          <option value="3332">Bikaner</option>

          <option value="3333">Bilara</option>

          <option value="3334">Bissau</option>

          <option value="3335">Borkhera</option>

          <option value="3336">Budhpura</option>

          <option value="3337">Bundi</option>

          <option value="3338">Chatsu</option>

          <option value="3339">Chechat</option>

          <option value="3340">Chhabra</option>

          <option value="3341">Chhapar</option>

          <option value="3342">Chhipa Barod</option>

          <option value="3343">Chhoti Sadri</option>

          <option value="3344">Chirawa</option>

          <option value="3345">Chittaurgarh</option>

          <option value="3346">Chittorgarh</option>

          <option value="3347">Chomun</option>

          <option value="3348">Churu</option>

          <option value="3349">Daosa</option>

          <option value="3350">Dariba</option>

          <option value="3351">Dausa</option>

          <option value="3352">Deoli</option>

          <option value="3353">Deshnok</option>

          <option value="3354">Devgarh</option>

          <option value="3355">Devli</option>

          <option value="3356">Dhariawad</option>

          <option value="3357">Dhaulpur</option>

          <option value="3358">Dholpur</option>

          <option value="3359">Didwana</option>

          <option value="3360">Dig</option>

          <option value="3361">Dungargarh</option>

          <option value="3362">Dungarpur</option>

          <option value="3363">Falna</option>

          <option value="3364">Fatehnagar</option>

          <option value="3365">Fatehpur</option>

          <option value="3366">Gajsinghpur</option>

          <option value="3367">Galiakot</option>

          <option value="3368">Ganganagar</option>

          <option value="3369">Gangapur</option>

          <option value="3370">Goredi Chancha</option>

          <option value="3371">Gothra</option>

          <option value="3372">Govindgarh</option>

          <option value="3373">Gulabpura</option>

          <option value="3374">Hanumangarh</option>

          <option value="3375">Hindaun</option>

          <option value="3376">Indragarh</option>

          <option value="3377">Jahazpur</option>

          <option value="3378">Jaipur</option>

          <option value="3379">Jaisalmer</option>

          <option value="3380">Jaiselmer</option>

          <option value="3381">Jaitaran</option>

          <option value="3382">Jalore</option>

          <option value="3383">Jhalawar</option>

          <option value="3384">Jhalrapatan</option>

          <option value="3385">Jhunjhunun</option>

          <option value="3386">Jobner</option>

          <option value="3387">Jodhpur</option>

          <option value="3388">Kaithun</option>

          <option value="3389">Kaman</option>

          <option value="3390">Kankroli</option>

          <option value="3391">Kanor</option>

          <option value="3392">Kapasan</option>

          <option value="3393">Kaprain</option>

          <option value="3394">Karanpura</option>

          <option value="3395">Karauli</option>

          <option value="3396">Kekri</option>

          <option value="3397">Keshorai Patan</option>

          <option value="3398">Kesrisinghpur</option>

          <option value="3399">Khairthal</option>

          <option value="3400">Khandela</option>

          <option value="3401">Khanpur</option>

          <option value="3402">Kherli</option>

          <option value="3403">Kherliganj</option>

          <option value="3404">Kherwara Chhaoni</option>

          <option value="3405">Khetri</option>

          <option value="3406">Kiranipura</option>

          <option value="3407">Kishangarh</option>

          <option value="3408">Kishangarh Ranwal</option>

          <option value="3409">Kolvi Rajendrapura</option>

          <option value="3410">Kot Putli</option>

          <option value="3411">Kota</option>

          <option value="3412">Kuchaman</option>

          <option value="3413">Kuchera</option>

          <option value="3414">Kumbhalgarh</option>

          <option value="3415">Kumbhkot</option>

          <option value="3416">Kumher</option>

          <option value="3417">Kushalgarh</option>

          <option value="3418">Lachhmangarh</option>

          <option value="3419">Ladnun</option>

          <option value="3420">Lakheri</option>

          <option value="3421">Lalsot</option>

          <option value="3422">Losal</option>

          <option value="3423">Madanganj</option>

          <option value="3424">Mahu Kalan</option>

          <option value="3425">Mahwa</option>

          <option value="3426">Makrana</option>

          <option value="3427">Malpura</option>

          <option value="3428">Mandal</option>

          <option value="3429">Mandalgarh</option>

          <option value="3430">Mandawar</option>

          <option value="3431">Mandwa</option>

          <option value="3432">Mangrol</option>

          <option value="3433">Manohar Thana</option>

          <option value="3434">Manoharpur</option>

          <option value="3435">Marwar</option>

          <option value="3436">Merta</option>

          <option value="3437">Modak</option>

          <option value="3438">Mount Abu</option>

          <option value="3439">Mukandgarh</option>

          <option value="3440">Mundwa</option>

          <option value="3441">Nadbai</option>

          <option value="3442">Naenwa</option>

          <option value="3443">Nagar</option>

          <option value="3444">Nagaur</option>

          <option value="3445">Napasar</option>

          <option value="3446">Naraina</option>

          <option value="3447">Nasirabad</option>

          <option value="3448">Nathdwara</option>

          <option value="3449">Nawa</option>

          <option value="3450">Nawalgarh</option>

          <option value="3451">Neem Ka Thana</option>

          <option value="3452">Neemrana</option>

          <option value="3453">Newa Talai</option>

          <option value="3454">Nimaj</option>

          <option value="3455">Nimbahera</option>

          <option value="3456">Niwai</option>

          <option value="3457">Nohar</option>

          <option value="3458">Nokha</option>

          <option value="3459">One SGM</option>

          <option value="3460">Padampur</option>

          <option value="3461">Pali</option>

          <option value="3462">Partapur</option>

          <option value="3463">Parvatsar</option>

          <option value="3464">Pasoond</option>

          <option value="3465">Phalna</option>

          <option value="3466">Phalodi</option>

          <option value="3467">Phulera</option>

          <option value="3468">Pilani</option>

          <option value="3469">Pilibanga</option>

          <option value="3470">Pindwara</option>

          <option value="3471">Pipalia Kalan</option>

          <option value="3472">Pipar</option>

          <option value="3473">Pirawa</option>

          <option value="3474">Pokaran</option>

          <option value="3475">Pratapgarh</option>

          <option value="3476">Pushkar</option>

          <option value="3477">Raipur</option>

          <option value="3478">Raisinghnagar</option>

          <option value="3479">Rajakhera</option>

          <option value="3480">Rajaldesar</option>

          <option value="3481">Rajgarh</option>

          <option value="3482">Rajsamand</option>

          <option value="3483">Ramganj Mandi</option>

          <option value="3484">Ramgarh</option>

          <option value="3485">Rani</option>

          <option value="3486">Raniwara</option>

          <option value="3487">Ratan Nagar</option>

          <option value="3488">Ratangarh</option>

          <option value="3489">Rawatbhata</option>

          <option value="3490">Rawatsar</option>

          <option value="3491">Rikhabdev</option>

          <option value="3492">Ringas</option>

          <option value="3493">Sadri</option>

          <option value="3494">Sadulshahar</option>

          <option value="3495">Sagwara</option>

          <option value="3496">Salumbar</option>

          <option value="3497">Sambhar</option>

          <option value="3498">Samdari</option>

          <option value="3499">Sanchor</option>

          <option value="3500">Sangariya</option>

          <option value="3501">Sangod</option>

          <option value="3502">Sardarshahr</option>

          <option value="3503">Sarwar</option>

          <option value="3504">Satal Kheri</option>

          <option value="3505">Sawai Madhopur</option>

          <option value="3506">Sewan Kalan</option>

          <option value="3507">Shahpura</option>

          <option value="3508">Sheoganj</option>

          <option value="3509">Sikar</option>

          <option value="3510">Sirohi</option>

          <option value="3511">Siwana</option>

          <option value="3512">Sogariya</option>

          <option value="3513">Sojat</option>

          <option value="3514">Sojat Road</option>

          <option value="3515">Sri Madhopur</option>

          <option value="3516">Sriganganagar</option>

          <option value="3517">Sujangarh</option>

          <option value="3518">Suket</option>

          <option value="3519">Sumerpur</option>

          <option value="3520">Sunel</option>

          <option value="3521">Surajgarh</option>

          <option value="3522">Suratgarh</option>

          <option value="3523">Swaroopganj</option>

          <option value="3524">Takhatgarh</option>

          <option value="3525">Taranagar</option>

          <option value="3526">Three STR</option>

          <option value="3527">Tijara</option>

          <option value="3528">Toda Bhim</option>

          <option value="3529">Toda Raisingh</option>

          <option value="3530">Todra</option>

          <option value="3531">Tonk</option>

          <option value="3532">Udaipur</option>

          <option value="3533">Udpura</option>

          <option value="3534">Uniara</option>

          <option value="3535">Vanasthali</option>

          <option value="3536">Vidyavihar</option>

          <option value="3537">Vijainagar</option>

          <option value="3538">Viratnagar</option>

          <option value="3539">Wer</option>

          <option value="3540">Gangtok</option>

          <option value="3541">Gezing</option>

          <option value="3542">Jorethang</option>

          <option value="3543">Mangan</option>

          <option value="3544">Namchi</option>

          <option value="3545">Naya Bazar</option>

          <option value="3546">No City</option>

          <option value="3547">Rangpo</option>

          <option value="3548">Sikkim</option>

          <option value="3549">Singtam</option>

          <option value="3550">Upper Tadong</option>

          <option value="3551">Abiramam</option>

          <option value="3552">Achampudur</option>

          <option value="3553">Acharapakkam</option>

          <option value="3554">Acharipallam</option>

          <option value="3555">Achipatti</option>

          <option value="3556">Adikaratti</option>

          <option value="3557">Adiramapattinam</option>

          <option value="3558">Aduturai</option>

          <option value="3559">Adyar</option>

          <option value="3560">Agaram</option>

          <option value="3561">Agasthiswaram</option>

          <option value="3562">Akkaraipettai</option>

          <option value="3563">Alagappapuram</option>

          <option value="3564">Alagapuri</option>

          <option value="3565">Alampalayam</option>

          <option value="3566">Alandur</option>

          <option value="3567">Alanganallur</option>

          <option value="3568">Alangayam</option>

          <option value="3569">Alangudi</option>

          <option value="3570">Alangulam</option>

          <option value="3571">Alanthurai</option>

          <option value="3572">Alapakkam</option>

          <option value="3573">Allapuram</option>

          <option value="3574">Alur</option>

          <option value="3575">Alwar Tirunagari</option>

          <option value="3576">Alwarkurichi</option>

          <option value="3577">Ambasamudram</option>

          <option value="3578">Ambur</option>

          <option value="3579">Ammainaickanur</option>

          <option value="3580">Ammaparikuppam</option>

          <option value="3581">Ammapettai</option>

          <option value="3582">Ammavarikuppam</option>

          <option value="3583">Ammur</option>

          <option value="3584">Anaimalai</option>

          <option value="3585">Anaiyur</option>

          <option value="3586">Anakaputhur</option>

          <option value="3587">Ananthapuram</option>

          <option value="3588">Andanappettai</option>

          <option value="3589">Andipalayam</option>

          <option value="3590">Andippatti</option>

          <option value="3591">Anjugramam</option>

          <option value="3592">Annamalainagar</option>

          <option value="3593">Annavasal</option>

          <option value="3594">Annur</option>

          <option value="3595">Anthiyur</option>

          <option value="3596">Appakudal</option>

          <option value="3597">Arachalur</option>

          <option value="3598">Arakandanallur</option>

          <option value="3599">Arakonam</option>

          <option value="3600">Aralvaimozhi</option>

          <option value="3601">Arani</option>

          <option value="3602">Arani Road</option>

          <option value="3603">Arantangi</option>

          <option value="3604">Arasiramani</option>

          <option value="3605">Aravakurichi</option>

          <option value="3606">Aravankadu</option>

          <option value="3607">Arcot</option>

          <option value="3608">Arimalam</option>

          <option value="3609">Ariyalur</option>

          <option value="3610">Ariyappampalayam</option>

          <option value="3611">Ariyur</option>

          <option value="3612">Arni</option>

          <option value="3613">Arulmigu Thirumuruganpundi</option>

          <option value="3614">Arumanai</option>

          <option value="3615">Arumbavur</option>

          <option value="3616">Arumuganeri</option>

          <option value="3617">Aruppukkottai</option>

          <option value="3618">Ashokapuram</option>

          <option value="3619">Athani</option>

          <option value="3620">Athanur</option>

          <option value="3621">Athimarapatti</option>

          <option value="3622">Athipattu</option>

          <option value="3623">Athur</option>

          <option value="3624">Attayyampatti</option>

          <option value="3625">Attur</option>

          <option value="3626">Auroville</option>

          <option value="3627">Avadattur</option>

          <option value="3628">Avadi</option>

          <option value="3629">Avalpundurai</option>

          <option value="3630">Avaniapuram</option>

          <option value="3631">Avinashi</option>

          <option value="3632">Ayakudi</option>

          <option value="3633">Ayanadaippu</option>

          <option value="3634">Aygudi</option>

          <option value="3635">Ayothiapattinam</option>

          <option value="3636">Ayyalur</option>

          <option value="3637">Ayyampalayam</option>

          <option value="3638">Ayyampettai</option>

          <option value="3639">Azhagiapandiapuram</option>

          <option value="3640">Balakrishnampatti</option>

          <option value="3641">Balakrishnapuram</option>

          <option value="3642">Balapallam</option>

          <option value="3643">Balasamudram</option>

          <option value="3644">Bargur</option>

          <option value="3645">Belur</option>

          <option value="3646">Berhatty</option>

          <option value="3647">Bhavani</option>

          <option value="3648">Bhawanisagar</option>

          <option value="3649">Bhuvanagiri</option>

          <option value="3650">Bikketti</option>

          <option value="3651">Bodinayakkanur</option>

          <option value="3652">Brahmana Periya Agraharam</option>

          <option value="3653">Buthapandi</option>

          <option value="3654">Buthipuram</option>

          <option value="3655">Chatrapatti</option>

          <option value="3656">Chembarambakkam</option>

          <option value="3657">Chengalpattu</option>

          <option value="3658">Chengam</option>

          <option value="3659">Chennai</option>

          <option value="3660">Chennasamudram</option>

          <option value="3661">Chennimalai</option>

          <option value="3662">Cheranmadevi</option>

          <option value="3663">Cheruvanki</option>

          <option value="3664">Chetpet</option>

          <option value="3665">Chettiarpatti</option>

          <option value="3666">Chettipalaiyam</option>

          <option value="3667">Chettipalayam Cantonment</option>

          <option value="3668">Chettithangal</option>

          <option value="3669">Cheyur</option>

          <option value="3670">Cheyyar</option>

          <option value="3671">Chidambaram</option>

          <option value="3672">Chinalapatti</option>

          <option value="3673">Chinna Anuppanadi</option>

          <option value="3674">Chinna Salem</option>

          <option value="3675">Chinnakkampalayam</option>

          <option value="3676">Chinnammanur</option>

          <option value="3677">Chinnampalaiyam</option>

          <option value="3678">Chinnasekkadu</option>

          <option value="3679">Chinnavedampatti</option>

          <option value="3680">Chitlapakkam</option>

          <option value="3681">Chittodu</option>

          <option value="3682">Cholapuram</option>

          <option value="3683">Coimbatore</option>

          <option value="3684">Coonoor</option>

          <option value="3685">Courtalam</option>

          <option value="3686">Cuddalore</option>

          <option value="3687">Dalavaipatti</option>

          <option value="3688">Darasuram</option>

          <option value="3689">Denkanikottai</option>

          <option value="3690">Desur</option>

          <option value="3691">Devadanapatti</option>

          <option value="3692">Devakkottai</option>

          <option value="3693">Devakottai</option>

          <option value="3694">Devanangurichi</option>

          <option value="3695">Devarshola</option>

          <option value="3696">Devasthanam</option>

          <option value="3697">Dhalavoipuram</option>

          <option value="3698">Dhali</option>

          <option value="3699">Dhaliyur</option>

          <option value="3700">Dharapadavedu</option>

          <option value="3701">Dharapuram</option>

          <option value="3702">Dharmapuri</option>

          <option value="3703">Dindigul</option>

          <option value="3704">Dusi</option>

          <option value="3705">Edaganasalai</option>

          <option value="3706">Edaikodu</option>

          <option value="3707">Edakalinadu</option>

          <option value="3708">Elathur</option>

          <option value="3709">Elayirampannai</option>

          <option value="3710">Elumalai</option>

          <option value="3711">Eral</option>

          <option value="3712">Eraniel</option>

          <option value="3713">Eriodu</option>

          <option value="3714">Erode</option>

          <option value="3715">Erumaipatti</option>

          <option value="3716">Eruvadi</option>

          <option value="3717">Ethapur</option>

          <option value="3718">Ettaiyapuram</option>

          <option value="3719">Ettimadai</option>

          <option value="3720">Ezhudesam</option>

          <option value="3721">Ganapathipuram</option>

          <option value="3722">Gandhi Nagar</option>

          <option value="3723">Gangaikondan</option>

          <option value="3724">Gangavalli</option>

          <option value="3725">Ganguvarpatti</option>

          <option value="3726">Gingi</option>

          <option value="3727">Gopalasamudram</option>

          <option value="3728">Gopichettipalaiyam</option>

          <option value="3729">Gudalur</option>

          <option value="3730">Gudiyattam</option>

          <option value="3731">Guduvanchery</option>

          <option value="3732">Gummidipoondi</option>

          <option value="3733">Hanumanthampatti</option>

          <option value="3734">Harur</option>

          <option value="3735">Harveypatti</option>

          <option value="3736">Highways</option>

          <option value="3737">Hosur</option>

          <option value="3738">Hubbathala</option>

          <option value="3739">Huligal</option>

          <option value="3740">Idappadi</option>

          <option value="3741">Idikarai</option>

          <option value="3742">Ilampillai</option>

          <option value="3743">Ilanji</option>

          <option value="3744">Iluppaiyurani</option>

          <option value="3745">Iluppur</option>

          <option value="3746">Inam Karur</option>

          <option value="3747">Injambakkam</option>

          <option value="3748">Irugur</option>

          <option value="3749">Jaffrabad</option>

          <option value="3750">Jagathala</option>

          <option value="3751">Jalakandapuram</option>

          <option value="3752">Jalladiampet</option>

          <option value="3753">Jambai</option>

          <option value="3754">Jayankondam</option>

          <option value="3755">Jolarpet</option>

          <option value="3756">Kadambur</option>

          <option value="3757">Kadathur</option>

          <option value="3758">Kadayal</option>

          <option value="3759">Kadayampatti</option>

          <option value="3760">Kadayanallur</option>

          <option value="3761">Kadiapatti</option>

          <option value="3762">Kalakkad</option>

          <option value="3763">Kalambur</option>

          <option value="3764">Kalapatti</option>

          <option value="3765">Kalappanaickenpatti</option>

          <option value="3766">Kalavai</option>

          <option value="3767">Kalinjur</option>

          <option value="3768">Kaliyakkavilai</option>

          <option value="3769">Kallakkurichi</option>

          <option value="3770">Kallakudi</option>

          <option value="3771">Kallidaikurichchi</option>

          <option value="3772">Kallukuttam</option>

          <option value="3773">Kallupatti</option>

          <option value="3774">Kalpakkam</option>

          <option value="3775">Kalugumalai</option>

          <option value="3776">Kamayagoundanpatti</option>

          <option value="3777">Kambainallur</option>

          <option value="3778">Kambam</option>

          <option value="3779">Kamuthi</option>

          <option value="3780">Kanadukathan</option>

          <option value="3781">Kanakkampalayam</option>

          <option value="3782">Kanam</option>

          <option value="3783">Kanchipuram</option>

          <option value="3784">Kandanur</option>

          <option value="3785">Kangayam</option>

          <option value="3786">Kangayampalayam</option>

          <option value="3787">Kangeyanallur</option>

          <option value="3788">Kaniyur</option>

          <option value="3789">Kanjikoil</option>

          <option value="3790">Kannadendal</option>

          <option value="3791">Kannamangalam</option>

          <option value="3792">Kannampalayam</option>

          <option value="3793">Kannankurichi</option>

          <option value="3794">Kannapalaiyam</option>

          <option value="3795">Kannivadi</option>

          <option value="3796">Kanyakumari</option>

          <option value="3797">Kappiyarai</option>

          <option value="3798">Karaikkudi</option>

          <option value="3799">Karamadai</option>

          <option value="3800">Karambakkam</option>

          <option value="3801">Karambakkudi</option>

          <option value="3802">Kariamangalam</option>

          <option value="3803">Kariapatti</option>

          <option value="3804">Karugampattur</option>

          <option value="3805">Karumandi Chellipalayam</option>

          <option value="3806">Karumathampatti</option>

          <option value="3807">Karumbakkam</option>

          <option value="3808">Karungal</option>

          <option value="3809">Karunguzhi</option>

          <option value="3810">Karuppur</option>

          <option value="3811">Karur</option>

          <option value="3812">Kasipalaiyam</option>

          <option value="3813">Kasipalayam G</option>

          <option value="3814">Kathirvedu</option>

          <option value="3815">Kathujuganapalli</option>

          <option value="3816">Katpadi</option>

          <option value="3817">Kattivakkam</option>

          <option value="3818">Kattumannarkoil</option>

          <option value="3819">Kattupakkam</option>

          <option value="3820">Kattuputhur</option>

          <option value="3821">Kaveripakkam</option>

          <option value="3822">Kaveripattinam</option>

          <option value="3823">Kavundampalaiyam</option>

          <option value="3824">Kavundampalayam</option>

          <option value="3825">Kayalpattinam</option>

          <option value="3826">Kayattar</option>

          <option value="3827">Kelamangalam</option>

          <option value="3828">Kelambakkam</option>

          <option value="3829">Kembainaickenpalayam</option>

          <option value="3830">Kethi</option>

          <option value="3831">Kilakarai</option>

          <option value="3832">Kilampadi</option>

          <option value="3833">Kilkulam</option>

          <option value="3834">Kilkunda</option>

          <option value="3835">Killiyur</option>

          <option value="3836">Killlai</option>

          <option value="3837">Kilpennathur</option>

          <option value="3838">Kilvelur</option>

          <option value="3839">Kinathukadavu</option>

          <option value="3840">Kiramangalam</option>

          <option value="3841">Kiranur</option>

          <option value="3842">Kiripatti</option>

          <option value="3843">Kizhapavur</option>

          <option value="3844">Kmarasamipatti</option>

          <option value="3845">Kochadai</option>

          <option value="3846">Kodaikanal</option>

          <option value="3847">Kodambakkam</option>

          <option value="3848">Kodavasal</option>

          <option value="3849">Kodumudi</option>

          <option value="3850">Kolachal</option>

          <option value="3851">Kolappalur</option>

          <option value="3852">Kolathupalayam</option>

          <option value="3853">Kolathur</option>

          <option value="3854">Kollankodu</option>

          <option value="3855">Kollankoil</option>

          <option value="3856">Komaralingam</option>

          <option value="3857">Komarapalayam</option>

          <option value="3858">Kombai</option>

          <option value="3859">Konakkarai</option>

          <option value="3860">Konavattam</option>

          <option value="3861">Kondalampatti</option>

          <option value="3862">Konganapuram</option>

          <option value="3863">Koradacheri</option>

          <option value="3864">Korampallam</option>

          <option value="3865">Kotagiri</option>

          <option value="3866">Kothinallur</option>

          <option value="3867">Kottaiyur</option>

          <option value="3868">Kottakuppam</option>

          <option value="3869">Kottaram</option>

          <option value="3870">Kottivakkam</option>

          <option value="3871">Kottur</option>

          <option value="3872">Kovilpatti</option>

          <option value="3873">Koyampattur</option>

          <option value="3874">Krishnagiri</option>

          <option value="3875">Krishnarayapuram</option>

          <option value="3876">Krishnasamudram</option>

          <option value="3877">Kuchanur</option>

          <option value="3878">Kuhalur</option>

          <option value="3879">Kulasekarappattinam</option>

          <option value="3880">Kulasekarapuram</option>

          <option value="3881">Kulithalai</option>

          <option value="3882">Kumarapalaiyam</option>

          <option value="3883">Kumarapalayam</option>

          <option value="3884">Kumarapuram</option>

          <option value="3885">Kumbakonam</option>

          <option value="3886">Kundrathur</option>

          <option value="3887">Kuniyamuthur</option>

          <option value="3888">Kunnathur</option>

          <option value="3889">Kunur</option>

          <option value="3890">Kuraikundu</option>

          <option value="3891">Kurichi</option>

          <option value="3892">Kurinjippadi</option>

          <option value="3893">Kurudampalaiyam</option>

          <option value="3894">Kurumbalur</option>

          <option value="3895">Kuthalam</option>

          <option value="3896">Kuthappar</option>

          <option value="3897">Kuttalam</option>

          <option value="3898">Kuttanallur</option>

          <option value="3899">Kuzhithurai</option>

          <option value="3900">Labbaikudikadu</option>

          <option value="3901">Lakkampatti</option>

          <option value="3902">Lalgudi</option>

          <option value="3903">Lalpet</option>

          <option value="3904">Llayangudi</option>

          <option value="3905">Madambakkam</option>

          <option value="3906">Madanur</option>

          <option value="3907">Madathukulam</option>

          <option value="3908">Madhavaram</option>

          <option value="3909">Madippakkam</option>

          <option value="3910">Madukkarai</option>

          <option value="3911">Madukkur</option>

          <option value="3912">Madurai</option>

          <option value="3913">Maduranthakam</option>

          <option value="3914">Maduravoyal</option>

          <option value="3915">Mahabalipuram</option>

          <option value="3916">Makkinanpatti</option>

          <option value="3917">Mallamuppampatti</option>

          <option value="3918">Mallankinaru</option>

          <option value="3919">Mallapuram</option>

          <option value="3920">Mallasamudram</option>

          <option value="3921">Mallur</option>

          <option value="3922">Mamallapuram</option>

          <option value="3923">Mamsapuram</option>

          <option value="3924">Manachanallur</option>

          <option value="3925">Manali</option>

          <option value="3926">Manalmedu</option>

          <option value="3927">Manalurpet</option>

          <option value="3928">Manamadurai</option>

          <option value="3929">Manapakkam</option>

          <option value="3930">Manapparai</option>

          <option value="3931">Manavalakurichi</option>

          <option value="3932">Mandaikadu</option>

          <option value="3933">Mandapam</option>

          <option value="3934">Mangadu</option>

          <option value="3935">Mangalam</option>

          <option value="3936">Mangalampet</option>

          <option value="3937">Manimutharu</option>

          <option value="3938">Mannargudi</option>

          <option value="3939">Mappilaiurani</option>

          <option value="3940">Maraimalai Nagar</option>

          <option value="3941">Marakkanam</option>

          <option value="3942">Maramangalathupatti</option>

          <option value="3943">Marandahalli</option>

          <option value="3944">Markayankottai</option>

          <option value="3945">Marudur</option>

          <option value="3946">Marungur</option>

          <option value="3947">Masinigudi</option>

          <option value="3948">Mathigiri</option>

          <option value="3949">Mattur</option>

          <option value="3950">Mayiladuthurai</option>

          <option value="3951">Mecheri</option>

          <option value="3952">Melacheval</option>

          <option value="3953">Melachokkanathapuram</option>

          <option value="3954">Melagaram</option>

          <option value="3955">Melamadai</option>

          <option value="3956">Melamaiyur</option>

          <option value="3957">Melanattam</option>

          <option value="3958">Melathiruppanthuruthi</option>

          <option value="3959">Melattur</option>

          <option value="3960">Melmananbedu</option>

          <option value="3961">Melpattampakkam</option>

          <option value="3962">Melur</option>

          <option value="3963">Melvisharam</option>

          <option value="3964">Mettupalayam</option>

          <option value="3965">Mettur</option>

          <option value="3966">Meyyanur</option>

          <option value="3967">Milavittan</option>

          <option value="3968">Minakshipuram</option>

          <option value="3969">Minambakkam</option>

          <option value="3970">Minjur</option>

          <option value="3971">Modakurichi</option>

          <option value="3972">Mohanur</option>

          <option value="3973">Mopperipalayam</option>

          <option value="3974">Mudalur</option>

          <option value="3975">Mudichur</option>

          <option value="3976">Mudukulathur</option>

          <option value="3977">Mukasipidariyur</option>

          <option value="3978">Mukkudal</option>

          <option value="3979">Mulagumudu</option>

          <option value="3980">Mulakaraipatti</option>

          <option value="3981">Mulanur</option>

          <option value="3982">Mullakkadu</option>

          <option value="3983">Muruganpalayam</option>

          <option value="3984">Musiri</option>

          <option value="3985">Muthupet</option>

          <option value="3986">Muthur</option>

          <option value="3987">Muttayyapuram</option>

          <option value="3988">Muttupet</option>

          <option value="3989">Muvarasampettai</option>

          <option value="3990">Myladi</option>

          <option value="3991">Mylapore</option>

          <option value="3992">Nadukkuthagai</option>

          <option value="3993">Naduvattam</option>

          <option value="3994">Nagapattinam</option>

          <option value="3995">Nagavakulam</option>

          <option value="3996">Nagercoil</option>

          <option value="3997">Nagojanahalli</option>

          <option value="3998">Nallampatti</option>

          <option value="3999">Nallur</option>

          <option value="4000">Namagiripettai</option>

          <option value="4001">Namakkal</option>

          <option value="4002">Nambiyur</option>

          <option value="4003">Nambutalai</option>

          <option value="4004">Nandambakkam</option>

          <option value="4005">Nandivaram</option>

          <option value="4006">Nangavalli</option>

          <option value="4007">Nangavaram</option>

          <option value="4008">Nanguneri</option>

          <option value="4009">Nanjikottai</option>

          <option value="4010">Nannilam</option>

          <option value="4011">Naranammalpuram</option>

          <option value="4012">Naranapuram</option>

          <option value="4013">Narasimhanaickenpalayam</option>

          <option value="4014">Narasingapuram</option>

          <option value="4015">Narasojipatti</option>

          <option value="4016">Naravarikuppam</option>

          <option value="4017">Nasiyanur</option>

          <option value="4018">Natham</option>

          <option value="4019">Nathampannai</option>

          <option value="4020">Natrampalli</option>

          <option value="4021">Nattam</option>

          <option value="4022">Nattapettai</option>

          <option value="4023">Nattarasankottai</option>

          <option value="4024">Navalpattu</option>

          <option value="4025">Nazarethpettai</option>

          <option value="4026">Nazerath</option>

          <option value="4027">Neikkarapatti</option>

          <option value="4028">Neiyyur</option>

          <option value="4029">Nellikkuppam</option>

          <option value="4030">Nelliyalam</option>

          <option value="4031">Nemili</option>

          <option value="4032">Nemilicheri</option>

          <option value="4033">Neripperichal</option>

          <option value="4034">Nerkunram</option>

          <option value="4035">Nerkuppai</option>

          <option value="4036">Nerunjipettai</option>

          <option value="4037">Neykkarappatti</option>

          <option value="4038">Neyveli</option>

          <option value="4039">Nidamangalam</option>

          <option value="4040">Nilagiri</option>

          <option value="4041">Nilakkottai</option>

          <option value="4042">Nilankarai</option>

          <option value="4043">Odaipatti</option>

          <option value="4044">Odaiyakulam</option>

          <option value="4045">Oddanchatram</option>

          <option value="4046">Odugathur</option>

          <option value="4047">Oggiyamduraipakkam</option>

          <option value="4048">Olagadam</option>

          <option value="4049">Omalur</option>

          <option value="4050">Ooty</option>

          <option value="4051">Orathanadu</option>

          <option value="4052">Othakadai</option>

          <option value="4053">Othakalmandapam</option>

          <option value="4054">Ottapparai</option>

          <option value="4055">Pacode</option>

          <option value="4056">Padaividu</option>

          <option value="4057">Padianallur</option>

          <option value="4058">Padirikuppam</option>

          <option value="4059">Padmanabhapuram</option>

          <option value="4060">Padririvedu</option>

          <option value="4061">Palaganangudy</option>

          <option value="4062">Palaimpatti</option>

          <option value="4063">Palakkodu</option>

          <option value="4064">Palamedu</option>

          <option value="4065">Palani</option>

          <option value="4066">Palani Chettipatti</option>

          <option value="4067">Palavakkam</option>

          <option value="4068">Palavansathu</option>

          <option value="4069">Palayakayal</option>

          <option value="4070">Palayam</option>

          <option value="4071">Palayamkottai</option>

          <option value="4072">Palladam</option>

          <option value="4073">Pallapalayam</option>

          <option value="4074">Pallapatti</option>

          <option value="4075">Pallattur</option>

          <option value="4076">Pallavaram</option>

          <option value="4077">Pallikaranai</option>

          <option value="4078">Pallikonda</option>

          <option value="4079">Pallipalaiyam</option>

          <option value="4080">Pallipalaiyam Agraharam</option>

          <option value="4081">Pallipattu</option>

          <option value="4082">Pammal</option>

          <option value="4083">Panagudi</option>

          <option value="4084">Panaimarathupatti</option>

          <option value="4085">Panapakkam</option>

          <option value="4086">Panboli</option>

          <option value="4087">Pandamangalam</option>

          <option value="4088">Pannaikadu</option>

          <option value="4089">Pannaipuram</option>

          <option value="4090">Pannuratti</option>

          <option value="4091">Panruti</option>

          <option value="4092">Papanasam</option>

          <option value="4093">Pappankurichi</option>

          <option value="4094">Papparapatti</option>

          <option value="4095">Pappireddipatti</option>

          <option value="4096">Paramakkudi</option>

          <option value="4097">Paramankurichi</option>

          <option value="4098">Paramathi</option>

          <option value="4099">Parangippettai</option>

          <option value="4100">Paravai</option>

          <option value="4101">Pasur</option>

          <option value="4102">Pathamadai</option>

          <option value="4103">Pattinam</option>

          <option value="4104">Pattiviranpatti</option>

          <option value="4105">Pattukkottai</option>

          <option value="4106">Pazhugal</option>

          <option value="4107">Pennadam</option>

          <option value="4108">Pennagaram</option>

          <option value="4109">Pennathur</option>

          <option value="4110">Peraiyur</option>

          <option value="4111">Peralam</option>

          <option value="4112">Perambalur</option>

          <option value="4113">Peranamallur</option>

          <option value="4114">Peravurani</option>

          <option value="4115">Periyakodiveri</option>

          <option value="4116">Periyakulam</option>

          <option value="4117">Periyanayakkanpalaiyam</option>

          <option value="4118">Periyanegamam</option>

          <option value="4119">Periyapatti</option>

          <option value="4120">Periyasemur</option>

          <option value="4121">Pernambut</option>

          <option value="4122">Perumagalur</option>

          <option value="4123">Perumandi</option>

          <option value="4124">Perumuchi</option>

          <option value="4125">Perundurai</option>

          <option value="4126">Perungalathur</option>

          <option value="4127">Perungudi</option>

          <option value="4128">Perungulam</option>

          <option value="4129">Perur</option>

          <option value="4130">Perur Chettipalaiyam</option>

          <option value="4131">Pethampalayam</option>

          <option value="4132">Pethanaickenpalayam</option>

          <option value="4133">Pillanallur</option>

          <option value="4134">Pirkankaranai</option>

          <option value="4135">Polichalur</option>

          <option value="4136">Pollachi</option>

          <option value="4137">Polur</option>

          <option value="4138">Ponmani</option>

          <option value="4139">Ponnamaravathi</option>

          <option value="4140">Ponnampatti</option>

          <option value="4141">Ponneri</option>

          <option value="4142">Porur</option>

          <option value="4143">Pothanur</option>

          <option value="4144">Pothatturpettai</option>

          <option value="4145">Pudukadai</option>

          <option value="4146">Pudukkottai Cantonment</option>

          <option value="4147">Pudukottai</option>

          <option value="4148">Pudupalaiyam Aghraharam</option>

          <option value="4149">Pudupalayam</option>

          <option value="4150">Pudupatti</option>

          <option value="4151">Pudupattinam</option>

          <option value="4152">Pudur</option>

          <option value="4153">Puduvayal</option>

          <option value="4154">Pulambadi</option>

          <option value="4155">Pulampatti</option>

          <option value="4156">Puliyampatti</option>

          <option value="4157">Puliyankudi</option>

          <option value="4158">Puliyur</option>

          <option value="4159">Pullampadi</option>

          <option value="4160">Puluvapatti</option>

          <option value="4161">Punamalli</option>

          <option value="4162">Punjai Puliyampatti</option>

          <option value="4163">Punjai Thottakurichi</option>

          <option value="4164">Punjaipugalur</option>

          <option value="4165">Puthalam</option>

          <option value="4166">Putteri</option>

          <option value="4167">Puvalur</option>

          <option value="4168">Puzhal</option>

          <option value="4169">Puzhithivakkam</option>

          <option value="4170">Rajapalayam</option>

          <option value="4171">Ramanathapuram</option>

          <option value="4172">Ramapuram</option>

          <option value="4173">Rameswaram</option>

          <option value="4174">Ranipet</option>

          <option value="4175">Rasipuram</option>

          <option value="4176">Rayagiri</option>

          <option value="4177">Rithapuram</option>

          <option value="4178">Rosalpatti</option>

          <option value="4179">Rudravathi</option>

          <option value="4180">Sadayankuppam</option>

          <option value="4181">Saint Thomas Mount</option>

          <option value="4182">Salangapalayam</option>

          <option value="4183">Salem</option>

          <option value="4184">Samalapuram</option>

          <option value="4185">Samathur</option>

          <option value="4186">Sambavar Vadagarai</option>

          <option value="4187">Sankaramanallur</option>

          <option value="4188">Sankarankoil</option>

          <option value="4189">Sankarapuram</option>

          <option value="4190">Sankari</option>

          <option value="4191">Sankarnagar</option>

          <option value="4192">Saravanampatti</option>

          <option value="4193">Sarcarsamakulam</option>

          <option value="4194">Sathiyavijayanagaram</option>

          <option value="4195">Sathuvachari</option>

          <option value="4196">Sathyamangalam</option>

          <option value="4197">Sattankulam</option>

          <option value="4198">Sattur</option>

          <option value="4199">Sayalgudi</option>

          <option value="4200">Sayapuram</option>

          <option value="4201">Seithur</option>

          <option value="4202">Sembakkam</option>

          <option value="4203">Semmipalayam</option>

          <option value="4204">Sennirkuppam</option>

          <option value="4205">Senthamangalam</option>

          <option value="4206">Sentharapatti</option>

          <option value="4207">Senur</option>

          <option value="4208">Sethiathoppu</option>

          <option value="4209">Sevilimedu</option>

          <option value="4210">Sevugampatti</option>

          <option value="4211">Shenbakkam</option>

          <option value="4212">Shencottai</option>

          <option value="4213">Shenkottai</option>

          <option value="4214">Sholavandan</option>

          <option value="4215">Sholinganallur</option>

          <option value="4216">Sholingur</option>

          <option value="4217">Sholur</option>

          <option value="4218">Sikkarayapuram</option>

          <option value="4219">Singampuneri</option>

          <option value="4220">Singanallur</option>

          <option value="4221">Singaperumalkoil</option>

          <option value="4222">Sirapalli</option>

          <option value="4223">Sirkali</option>

          <option value="4224">Sirugamani</option>

          <option value="4225">Sirumugai</option>

          <option value="4226">Sithayankottai</option>

          <option value="4227">Sithurajapuram</option>

          <option value="4228">Sivaganga</option>

          <option value="4229">Sivagiri</option>

          <option value="4230">Sivakasi</option>

          <option value="4231">Sivanthipuram</option>

          <option value="4232">Sivur</option>

          <option value="4233">Soranjeri</option>

          <option value="4234">South Kannanur</option>

          <option value="4235">South Kodikulam</option>

          <option value="4236">Srimushnam</option>

          <option value="4237">Sriperumpudur</option>

          <option value="4238">Sriramapuram</option>

          <option value="4239">Srirangam</option>

          <option value="4240">Srivaikuntam</option>

          <option value="4241">Srivilliputtur</option>

          <option value="4242">Suchindram</option>

          <option value="4243">Suliswaranpatti</option>

          <option value="4244">Sulur</option>

          <option value="4245">Sundarapandiam</option>

          <option value="4246">Sundarapandiapuram</option>

          <option value="4247">Surampatti</option>

          <option value="4248">Surandai</option>

          <option value="4249">Suriyampalayam</option>

          <option value="4250">Swamimalai</option>

          <option value="4251">TNPL Pugalur</option>

          <option value="4252">Tambaram</option>

          <option value="4253">Taramangalam</option>

          <option value="4254">Tattayyangarpettai</option>

          <option value="4255">Tayilupatti</option>

          <option value="4256">Tenkasi</option>

          <option value="4257">Thadikombu</option>

          <option value="4258">Thakkolam</option>

          <option value="4259">Thalainayar</option>

          <option value="4260">Thalakudi</option>

          <option value="4261">Thamaraikulam</option>

          <option value="4262">Thammampatti</option>

          <option value="4263">Thanjavur</option>

          <option value="4264">Thanthoni</option>

          <option value="4265">Tharangambadi</option>

          <option value="4266">Thedavur</option>

          <option value="4267">Thenambakkam</option>

          <option value="4268">Thengampudur</option>

          <option value="4269">Theni</option>

          <option value="4270">Theni Allinagaram</option>

          <option value="4271">Thenkarai</option>

          <option value="4272">Thenthamaraikulam</option>

          <option value="4273">Thenthiruperai</option>

          <option value="4274">Thesur</option>

          <option value="4275">Thevaram</option>

          <option value="4276">Thevur</option>

          <option value="4277">Thiagadurgam</option>

          <option value="4278">Thiagarajar Colony</option>

          <option value="4279">Thingalnagar</option>

          <option value="4280">Thiruchirapalli</option>

          <option value="4281">Thirukarungudi</option>

          <option value="4282">Thirukazhukundram</option>

          <option value="4283">Thirumalayampalayam</option>

          <option value="4284">Thirumazhisai</option>

          <option value="4285">Thirunagar</option>

          <option value="4286">Thirunageswaram</option>

          <option value="4287">Thirunindravur</option>

          <option value="4288">Thirunirmalai</option>

          <option value="4289">Thiruparankundram</option>

          <option value="4290">Thiruparappu</option>

          <option value="4291">Thiruporur</option>

          <option value="4292">Thiruppanandal</option>

          <option value="4293">Thirupuvanam</option>

          <option value="4294">Thiruthangal</option>

          <option value="4295">Thiruthuraipundi</option>

          <option value="4296">Thiruvaivaru</option>

          <option value="4297">Thiruvalam</option>

          <option value="4298">Thiruvarur</option>

          <option value="4299">Thiruvattaru</option>

          <option value="4300">Thiruvenkatam</option>

          <option value="4301">Thiruvennainallur</option>

          <option value="4302">Thiruvithankodu</option>

          <option value="4303">Thisayanvilai</option>

          <option value="4304">Thittacheri</option>

          <option value="4305">Thondamuthur</option>

          <option value="4306">Thorapadi</option>

          <option value="4307">Thottipalayam</option>

          <option value="4308">Thottiyam</option>

          <option value="4309">Thudiyalur</option>

          <option value="4310">Thuthipattu</option>

          <option value="4311">Thuvakudi</option>

          <option value="4312">Timiri</option>

          <option value="4313">Tindivanam</option>

          <option value="4314">Tinnanur</option>

          <option value="4315">Tiruchchendur</option>

          <option value="4316">Tiruchengode</option>

          <option value="4317">Tirukkalukkundram</option>

          <option value="4318">Tirukkattuppalli</option>

          <option value="4319">Tirukkoyilur</option>

          <option value="4320">Tirumangalam</option>

          <option value="4321">Tirumullaivasal</option>

          <option value="4322">Tirumuruganpundi</option>

          <option value="4323">Tirunageswaram</option>

          <option value="4324">Tirunelveli</option>

          <option value="4325">Tirupathur</option>

          <option value="4326">Tirupattur</option>

          <option value="4327">Tiruppuvanam</option>

          <option value="4328">Tirupur</option>

          <option value="4329">Tirusulam</option>

          <option value="4330">Tiruttani</option>

          <option value="4331">Tiruvallur</option>

          <option value="4332">Tiruvannamalai</option>

          <option value="4333">Tiruverambur</option>

          <option value="4334">Tiruverkadu</option>

          <option value="4335">Tiruvethipuram</option>

          <option value="4336">Tiruvidaimarudur</option>

          <option value="4337">Tiruvottiyur</option>

          <option value="4338">Tittakudi</option>

          <option value="4339">Tondi</option>

          <option value="4340">Turaiyur</option>

          <option value="4341">Tuticorin</option>

          <option value="4342">Udagamandalam</option>

          <option value="4343">Udagamandalam Valley</option>

          <option value="4344">Udankudi</option>

          <option value="4345">Udayarpalayam</option>

          <option value="4346">Udumalaipettai</option>

          <option value="4347">Udumalpet</option>

          <option value="4348">Ullur</option>

          <option value="4349">Ulundurpettai</option>

          <option value="4350">Unjalaur</option>

          <option value="4351">Unnamalaikadai</option>

          <option value="4352">Uppidamangalam</option>

          <option value="4353">Uppiliapuram</option>

          <option value="4354">Urachikkottai</option>

          <option value="4355">Urapakkam</option>

          <option value="4356">Usilampatti</option>

          <option value="4357">Uthangarai</option>

          <option value="4358">Uthayendram</option>

          <option value="4359">Uthiramerur</option>

          <option value="4360">Uthukkottai</option>

          <option value="4361">Uttamapalaiyam</option>

          <option value="4362">Uttukkuli</option>

          <option value="4363">Vadakarai Kizhpadugai</option>

          <option value="4364">Vadakkanandal</option>

          <option value="4365">Vadakku Valliyur</option>

          <option value="4366">Vadalur</option>

          <option value="4367">Vadamadurai</option>

          <option value="4368">Vadavalli</option>

          <option value="4369">Vadipatti</option>

          <option value="4370">Vadugapatti</option>

          <option value="4371">Vaithiswarankoil</option>

          <option value="4372">Valangaiman</option>

          <option value="4373">Valasaravakkam</option>

          <option value="4374">Valavanur</option>

          <option value="4375">Vallam</option>

          <option value="4376">Valparai</option>

          <option value="4377">Valvaithankoshtam</option>

          <option value="4378">Vanavasi</option>

          <option value="4379">Vandalur</option>

          <option value="4380">Vandavasi</option>

          <option value="4381">Vandiyur</option>

          <option value="4382">Vaniputhur</option>

          <option value="4383">Vaniyambadi</option>

          <option value="4384">Varadarajanpettai</option>

          <option value="4385">Varadharajapuram</option>

          <option value="4386">Vasudevanallur</option>

          <option value="4387">Vathirairuppu</option>

          <option value="4388">Vattalkundu</option>

          <option value="4389">Vazhapadi</option>

          <option value="4390">Vedapatti</option>

          <option value="4391">Vedaranniyam</option>

          <option value="4392">Vedasandur</option>

          <option value="4393">Velampalaiyam</option>

          <option value="4394">Velankanni</option>

          <option value="4395">Vellakinar</option>

          <option value="4396">Vellakoil</option>

          <option value="4397">Vellalapatti</option>

          <option value="4398">Vellalur</option>

          <option value="4399">Vellanur</option>

          <option value="4400">Vellimalai</option>

          <option value="4401">Vellore</option>

          <option value="4402">Vellottamparappu</option>

          <option value="4403">Velluru</option>

          <option value="4404">Vengampudur</option>

          <option value="4405">Vengathur</option>

          <option value="4406">Vengavasal</option>

          <option value="4407">Venghatur</option>

          <option value="4408">Venkarai</option>

          <option value="4409">Vennanthur</option>

          <option value="4410">Veppathur</option>

          <option value="4411">Verkilambi</option>

          <option value="4412">Vettaikaranpudur</option>

          <option value="4413">Vettavalam</option>

          <option value="4414">Vijayapuri</option>

          <option value="4415">Vikramasingapuram</option>

          <option value="4416">Vikravandi</option>

          <option value="4417">Vilangudi</option>

          <option value="4418">Vilankurichi</option>

          <option value="4419">Vilapakkam</option>

          <option value="4420">Vilathikulam</option>

          <option value="4421">Vilavur</option>

          <option value="4422">Villukuri</option>

          <option value="4423">Villupuram</option>

          <option value="4424">Viraganur</option>

          <option value="4425">Virakeralam</option>

          <option value="4426">Virakkalpudur</option>

          <option value="4427">Virapandi</option>

          <option value="4428">Virapandi Cantonment</option>

          <option value="4429">Virappanchatram</option>

          <option value="4430">Viravanallur</option>

          <option value="4431">Virudambattu</option>

          <option value="4432">Virudhachalam</option>

          <option value="4433">Virudhunagar</option>

          <option value="4434">Virupakshipuram</option>

          <option value="4435">Viswanatham</option>

          <option value="4436">Vriddhachalam</option>

          <option value="4437">Walajabad</option>

          <option value="4438">Walajapet</option>

          <option value="4439">Wellington</option>

          <option value="4440">Yercaud</option>

          <option value="4441">Zamin Uthukuli</option>

          <option value="4442">Achampet</option>

          <option value="4443">Adilabad</option>

          <option value="4444">Armoor</option>

          <option value="4445">Asifabad</option>

          <option value="4446">Badepally</option>

          <option value="4447">Banswada</option>

          <option value="4448">Bellampalli</option>

          <option value="4449">Bhadrachalam</option>

          <option value="4450">Bhainsa</option>

          <option value="4451">Bhongir</option>

          <option value="4452">Bhupalpally</option>

          <option value="4453">Bodhan</option>

          <option value="4454">Bollaram</option>

          <option value="4455">Devarkonda</option>

          <option value="4456">Farooqnagar</option>

          <option value="4457">Gadwal</option>

          <option value="4458">Gajwel</option>

          <option value="4459">Ghatkesar</option>

          <option value="4460">Hyderabad</option>

          <option value="4461">Jagtial</option>

          <option value="4462">Jangaon</option>

          <option value="4463">Kagaznagar</option>

          <option value="4464">Kalwakurthy</option>

          <option value="4465">Kamareddy</option>

          <option value="4466">Karimnagar</option>

          <option value="4467">Khammam</option>

          <option value="4468">Kodada</option>

          <option value="4469">Koratla</option>

          <option value="4470">Kottagudem</option>

          <option value="4471">Kyathampalle</option>

          <option value="4472">Madhira</option>

          <option value="4473">Mahabubabad</option>

          <option value="4474">Mahbubnagar</option>

          <option value="4475">Mancherial</option>

          <option value="4476">Mandamarri</option>

          <option value="4477">Manuguru</option>

          <option value="4478">Medak</option>

          <option value="4479">Medchal</option>

          <option value="4480">Miryalaguda</option>

          <option value="4481">Nagar Karnul</option>

          <option value="4482">Nakrekal</option>

          <option value="4483">Nalgonda</option>

          <option value="4484">Narayanpet</option>

          <option value="4485">Narsampet</option>

          <option value="4486">Nirmal</option>

          <option value="4487">Nizamabad</option>

          <option value="4488">Palwancha</option>

          <option value="4489">Peddapalli</option>

          <option value="4490">Ramagundam</option>

          <option value="4491">Ranga Reddy district</option>

          <option value="4492">Sadasivpet</option>

          <option value="4493">Sangareddy</option>

          <option value="4494">Sarapaka</option>

          <option value="4495">Sathupalle</option>

          <option value="4496">Secunderabad</option>

          <option value="4497">Siddipet</option>

          <option value="4498">Singapur</option>

          <option value="4499">Sircilla</option>

          <option value="4500">Suryapet</option>

          <option value="4501">Tandur</option>

          <option value="4502">Vemulawada</option>

          <option value="4503">Vikarabad</option>

          <option value="4504">Wanaparthy</option>

          <option value="4505">Warangal</option>

          <option value="4506">Yellandu</option>

          <option value="4507">Zahirabad</option>

          <option value="4508">Agartala</option>

          <option value="4509">Amarpur</option>

          <option value="4510">Ambassa</option>

          <option value="4511">Badharghat</option>

          <option value="4512">Belonia</option>

          <option value="4513">Dharmanagar</option>

          <option value="4514">Gakulnagar</option>

          <option value="4515">Gandhigram</option>

          <option value="4516">Indranagar</option>

          <option value="4517">Jogendranagar</option>

          <option value="4518">Kailasahar</option>

          <option value="4519">Kamalpur</option>

          <option value="4520">Kanchanpur</option>

          <option value="4521">Khowai</option>

          <option value="4522">Kumarghat</option>

          <option value="4523">Kunjaban</option>

          <option value="4524">Narsingarh</option>

          <option value="4525">Pratapgarh</option>

          <option value="4526">Ranir Bazar</option>

          <option value="4527">Sabrum</option>

          <option value="4528">Sonamura</option>

          <option value="4529">Teliamura</option>

          <option value="4530">Udaipur</option>

          <option value="4531">Achhalda</option>

          <option value="4532">Achhnera</option>

          <option value="4533">Adari</option>

          <option value="4534">Afzalgarh</option>

          <option value="4535">Agarwal Mandi</option>

          <option value="4536">Agra</option>

          <option value="4537">Agra Cantonment</option>

          <option value="4538">Ahraura</option>

          <option value="4539">Ailum</option>

          <option value="4540">Air Force Area</option>

          <option value="4541">Ajhuwa</option>

          <option value="4542">Akbarpur</option>

          <option value="4543">Alapur</option>

          <option value="4544">Aliganj</option>

          <option value="4545">Aligarh</option>

          <option value="4546">Allahabad</option>

          <option value="4547">Allahabad Cantonment</option>

          <option value="4548">Allahganj</option>

          <option value="4549">Amanpur</option>

          <option value="4550">Ambahta</option>

          <option value="4551">Amethi</option>

          <option value="4552">Amila</option>

          <option value="4553">Amilo</option>

          <option value="4554">Aminagar Sarai</option>

          <option value="4555">Aminagar Urf Bhurbaral</option>

          <option value="4556">Amraudha</option>

          <option value="4557">Amroha</option>

          <option value="4558">Anandnagar</option>

          <option value="4559">Anpara</option>

          <option value="4560">Antu</option>

          <option value="4561">Anupshahr</option>

          <option value="4562">Aonla</option>

          <option value="4563">Armapur Estate</option>

          <option value="4564">Ashokpuram</option>

          <option value="4565">Ashrafpur Kichhauchha</option>

          <option value="4566">Atarra</option>

          <option value="4567">Atasu</option>

          <option value="4568">Atrauli</option>

          <option value="4569">Atraulia</option>

          <option value="4570">Auraiya</option>

          <option value="4571">Aurangabad</option>

          <option value="4572">Aurangabad Bangar</option>

          <option value="4573">Auras</option>

          <option value="4574">Awagarh</option>

          <option value="4575">Ayodhya</option>

          <option value="4576">Azamgarh</option>

          <option value="4577">Azizpur</option>

          <option value="4578">Azmatgarh</option>

          <option value="4579">Babarpur Ajitmal</option>

          <option value="4580">Baberu</option>

          <option value="4581">Babina</option>

          <option value="4582">Babrala</option>

          <option value="4583">Babugarh</option>

          <option value="4584">Bachhiowan</option>

          <option value="4585">Bachhraon</option>

          <option value="4586">Bad</option>

          <option value="4587">Badaun</option>

          <option value="4588">Baghpat</option>

          <option value="4589">Bah</option>

          <option value="4590">Bahadurganj</option>

          <option value="4591">Baheri</option>

          <option value="4592">Bahjoi</option>

          <option value="4593">Bahraich</option>

          <option value="4594">Bahsuma</option>

          <option value="4595">Bahua</option>

          <option value="4596">Bajna</option>

          <option value="4597">Bakewar</option>

          <option value="4598">Bakiabad</option>

          <option value="4599">Baldeo</option>

          <option value="4600">Ballia</option>

          <option value="4601">Balrampur</option>

          <option value="4602">Banat</option>

          <option value="4603">Banda</option>

          <option value="4604">Bangarmau</option>

          <option value="4605">Banki</option>

          <option value="4606">Bansdih</option>

          <option value="4607">Bansgaon</option>

          <option value="4608">Bansi</option>

          <option value="4609">Barabanki</option>

          <option value="4610">Baragaon</option>

          <option value="4611">Baraut</option>

          <option value="4612">Bareilly</option>

          <option value="4613">Bareilly Cantonment</option>

          <option value="4614">Barhalganj</option>

          <option value="4615">Barhani</option>

          <option value="4616">Barhapur</option>

          <option value="4617">Barkhera</option>

          <option value="4618">Barsana</option>

          <option value="4619">Barva Sagar</option>

          <option value="4620">Barwar</option>

          <option value="4621">Basti</option>

          <option value="4622">Begumabad Budhana</option>

          <option value="4623">Behat</option>

          <option value="4624">Behta Hajipur</option>

          <option value="4625">Bela</option>

          <option value="4626">Belthara</option>

          <option value="4627">Beniganj</option>

          <option value="4628">Beswan</option>

          <option value="4629">Bewar</option>

          <option value="4630">Bhadarsa</option>

          <option value="4631">Bhadohi</option>

          <option value="4632">Bhagwantnagar</option>

          <option value="4633">Bharatganj</option>

          <option value="4634">Bhargain</option>

          <option value="4635">Bharthana</option>

          <option value="4636">Bharuhana</option>

          <option value="4637">Bharwari</option>

          <option value="4638">Bhatni Bazar</option>

          <option value="4639">Bhatpar Rani</option>

          <option value="4640">Bhawan Bahadurnagar</option>

          <option value="4641">Bhinga</option>

          <option value="4642">Bhojpur Dharampur</option>

          <option value="4643">Bhokarhedi</option>

          <option value="4644">Bhongaon</option>

          <option value="4645">Bhulepur</option>

          <option value="4646">Bidhuna</option>

          <option value="4647">Bighapur</option>

          <option value="4648">Bijnor</option>

          <option value="4649">Bijpur</option>

          <option value="4650">Bikapur</option>

          <option value="4651">Bilari</option>

          <option value="4652">Bilaspur</option>

          <option value="4653">Bilgram</option>

          <option value="4654">Bilhaur</option>

          <option value="4655">Bilram</option>

          <option value="4656">Bilrayaganj</option>

          <option value="4657">Bilsanda</option>

          <option value="4658">Bilsi</option>

          <option value="4659">Bindki</option>

          <option value="4660">Bisalpur</option>

          <option value="4661">Bisanda Buzurg</option>

          <option value="4662">Bisauli</option>

          <option value="4663">Bisharatganj</option>

          <option value="4664">Bisokhar</option>

          <option value="4665">Biswan</option>

          <option value="4666">Bithur</option>

          <option value="4667">Budaun</option>

          <option value="4668">Bugrasi</option>

          <option value="4669">Bulandshahar</option>

          <option value="4670">Burhana</option>

          <option value="4671">Chail</option>

          <option value="4672">Chak Imam Ali</option>

          <option value="4673">Chakeri</option>

          <option value="4674">Chakia</option>

          <option value="4675">Chandauli</option>

          <option value="4676">Chandausi</option>

          <option value="4677">Chandpur</option>

          <option value="4678">Charkhari</option>

          <option value="4679">Charthawal</option>

          <option value="4680">Chaumuhan</option>

          <option value="4681">Chhaprauli</option>

          <option value="4682">Chhara Rafatpur</option>

          <option value="4683">Chharprauli</option>

          <option value="4684">Chhata</option>

          <option value="4685">Chhatari</option>

          <option value="4686">Chhibramau</option>

          <option value="4687">Chhutmalpur</option>

          <option value="4688">Chilkana Sultanpur</option>

          <option value="4689">Chirgaon</option>

          <option value="4690">Chit Baragaon</option>

          <option value="4691">Chitrakut Dham</option>

          <option value="4692">Chopan</option>

          <option value="4693">Choubepur Kalan</option>

          <option value="4694">Chunar</option>

          <option value="4695">Churk Ghurma</option>

          <option value="4696">Colonelganj</option>

          <option value="4697">Dadri</option>

          <option value="4698">Dalmau</option>

          <option value="4699">Dankaur</option>

          <option value="4700">Dariyabad</option>

          <option value="4701">Dasna</option>

          <option value="4702">Dataganj</option>

          <option value="4703">Daurala</option>

          <option value="4704">Dayal Bagh</option>

          <option value="4705">Deoband</option>

          <option value="4706">Deoranian</option>

          <option value="4707">Deoria</option>

          <option value="4708">Dewa</option>

          <option value="4709">Dhampur</option>

          <option value="4710">Dhanauha</option>

          <option value="4711">Dhanauli</option>

          <option value="4712">Dhanaura</option>

          <option value="4713">Dharoti Khurd</option>

          <option value="4714">Dhauratanda</option>

          <option value="4715">Dhaurhra</option>

          <option value="4716">Dibai</option>

          <option value="4717">Dibiyapur</option>

          <option value="4718">Dildarnagar Fatehpur</option>

          <option value="4719">Do Ghat</option>

          <option value="4720">Dohrighat</option>

          <option value="4721">Dostpur</option>

          <option value="4722">Dudhinagar</option>

          <option value="4723">Dulhipur</option>

          <option value="4724">Dundwaraganj</option>

          <option value="4725">Ekdil</option>

          <option value="4726">Erich</option>

          <option value="4727">Etah</option>

          <option value="4728">Etawah</option>

          <option value="4729">Faizabad</option>

          <option value="4730">Faizabad Cantonment</option>

          <option value="4731">Faizganj</option>

          <option value="4732">Farah</option>

          <option value="4733">Faridnagar</option>

          <option value="4734">Faridpur</option>

          <option value="4735">Faridpur Cantonment</option>

          <option value="4736">Fariha</option>

          <option value="4737">Farrukhabad</option>

          <option value="4738">Fatehabad</option>

          <option value="4739">Fatehganj Pashchimi</option>

          <option value="4740">Fatehganj Purvi</option>

          <option value="4741">Fatehgarh</option>

          <option value="4742">Fatehpur</option>

          <option value="4743">Fatehpur Chaurasi</option>

          <option value="4744">Fatehpur Sikri</option>

          <option value="4745">Firozabad</option>

          <option value="4746">Gajraula</option>

          <option value="4747">Ganga Ghat</option>

          <option value="4748">Gangapur</option>

          <option value="4749">Gangoh</option>

          <option value="4750">Ganj Muradabad</option>

          <option value="4751">Garautha</option>

          <option value="4752">Garhi Pukhta</option>

          <option value="4753">Garhmukteshwar</option>

          <option value="4754">Gaura Barahaj</option>

          <option value="4755">Gauri Bazar</option>

          <option value="4756">Gausganj</option>

          <option value="4757">Gawan</option>

          <option value="4758">Ghatampur</option>

          <option value="4759">Ghaziabad</option>

          <option value="4760">Ghazipur</option>

          <option value="4761">Ghiror</option>

          <option value="4762">Ghorawal</option>

          <option value="4763">Ghosi</option>

          <option value="4764">Ghosia Bazar</option>

          <option value="4765">Ghughuli</option>

          <option value="4766">Gohand</option>

          <option value="4767">Gokul</option>

          <option value="4768">Gola Bazar</option>

          <option value="4769">Gola Gokarannath</option>

          <option value="4770">Gonda</option>

          <option value="4771">Gopamau</option>

          <option value="4772">Gopiganj</option>

          <option value="4773">Gorakhpur</option>

          <option value="4774">Gosainganj</option>

          <option value="4775">Govardhan</option>

          <option value="4776">Greater Noida</option>

          <option value="4777">Gulaothi</option>

          <option value="4778">Gulariya</option>

          <option value="4779">Gulariya Bhindara</option>

          <option value="4780">Gunnaur</option>

          <option value="4781">Gursahaiganj</option>

          <option value="4782">Gursarai</option>

          <option value="4783">Gyanpur</option>

          <option value="4784">Hafizpur</option>

          <option value="4785">Haidergarh</option>

          <option value="4786">Haldaur</option>

          <option value="4787">Hamirpur</option>

          <option value="4788">Handia</option>

          <option value="4789">Hapur</option>

          <option value="4790">Hardoi</option>

          <option value="4791">Harduaganj</option>

          <option value="4792">Hargaon</option>

          <option value="4793">Hariharpur</option>

          <option value="4794">Harraiya</option>

          <option value="4795">Hasanpur</option>

          <option value="4796">Hasayan</option>

          <option value="4797">Hastinapur</option>

          <option value="4798">Hata</option>

          <option value="4799">Hathras</option>

          <option value="4800">Hyderabad</option>

          <option value="4801">Ibrahimpur</option>

          <option value="4802">Iglas</option>

          <option value="4803">Ikauna</option>

          <option value="4804">Iltifatganj Bazar</option>

          <option value="4805">Indian Telephone Industry Mank</option>

          <option value="4806">Islamnagar</option>

          <option value="4807">Itaunja</option>

          <option value="4808">Itimadpur</option>

          <option value="4809">Jagner</option>

          <option value="4810">Jahanabad</option>

          <option value="4811">Jahangirabad</option>

          <option value="4812">Jahangirpur</option>

          <option value="4813">Jais</option>

          <option value="4814">Jaithara</option>

          <option value="4815">Jalalabad</option>

          <option value="4816">Jalali</option>

          <option value="4817">Jalalpur</option>

          <option value="4818">Jalaun</option>

          <option value="4819">Jalesar</option>

          <option value="4820">Jamshila</option>

          <option value="4821">Jangipur</option>

          <option value="4822">Jansath</option>

          <option value="4823">Jarwal</option>

          <option value="4824">Jasrana</option>

          <option value="4825">Jaswantnagar</option>

          <option value="4826">Jatari</option>

          <option value="4827">Jaunpur</option>

          <option value="4828">Jewar</option>

          <option value="4829">Jhalu</option>

          <option value="4830">Jhansi</option>

          <option value="4831">Jhansi Cantonment</option>

          <option value="4832">Jhansi Railway Settlement</option>

          <option value="4833">Jhinjhak</option>

          <option value="4834">Jhinjhana</option>

          <option value="4835">Jhusi</option>

          <option value="4836">Jhusi Kohna</option>

          <option value="4837">Jiyanpur</option>

          <option value="4838">Joya</option>

          <option value="4839">Jyoti Khuria</option>

          <option value="4840">Jyotiba Phule Nagar</option>

          <option value="4841">Kabrai</option>

          <option value="4842">Kachhauna Patseni</option>

          <option value="4843">Kachhla</option>

          <option value="4844">Kachhwa</option>

          <option value="4845">Kadaura</option>

          <option value="4846">Kadipur</option>

          <option value="4847">Kailashpur</option>

          <option value="4848">Kaimganj</option>

          <option value="4849">Kairana</option>

          <option value="4850">Kakgaina</option>

          <option value="4851">Kakod</option>

          <option value="4852">Kakori</option>

          <option value="4853">Kakrala</option>

          <option value="4854">Kalinagar</option>

          <option value="4855">Kalpi</option>

          <option value="4856">Kamalganj</option>

          <option value="4857">Kampil</option>

          <option value="4858">Kandhla</option>

          <option value="4859">Kandwa</option>

          <option value="4860">Kannauj</option>

          <option value="4861">Kanpur</option>

          <option value="4862">Kant</option>

          <option value="4863">Kanth</option>

          <option value="4864">Kaptanganj</option>

          <option value="4865">Karaon</option>

          <option value="4866">Karari</option>

          <option value="4867">Karhal</option>

          <option value="4868">Karnawal</option>

          <option value="4869">Kasganj</option>

          <option value="4870">Katariya</option>

          <option value="4871">Katghar Lalganj</option>

          <option value="4872">Kathera</option>

          <option value="4873">Katra</option>

          <option value="4874">Katra Medniganj</option>

          <option value="4875">Kauriaganj</option>

          <option value="4876">Kemri</option>

          <option value="4877">Kerakat</option>

          <option value="4878">Khadda</option>

          <option value="4879">Khaga</option>

          <option value="4880">Khailar</option>

          <option value="4881">Khair</option>

          <option value="4882">Khairabad</option>

          <option value="4883">Khairagarh</option>

          <option value="4884">Khalilabad</option>

          <option value="4885">Khamaria</option>

          <option value="4886">Khanpur</option>

          <option value="4887">Kharela</option>

          <option value="4888">Khargupur</option>

          <option value="4889">Khariya</option>

          <option value="4890">Kharkhoda</option>

          <option value="4891">Khatauli</option>

          <option value="4892">Khatauli Rural</option>

          <option value="4893">Khekra</option>

          <option value="4894">Kheri</option>

          <option value="4895">Kheta Sarai</option>

          <option value="4896">Khudaganj</option>

          <option value="4897">Khurja</option>

          <option value="4898">Khutar</option>

          <option value="4899">Kiraoli</option>

          <option value="4900">Kiratpur</option>

          <option value="4901">Kishanpur</option>

          <option value="4902">Kishni</option>

          <option value="4903">Kithaur</option>

          <option value="4904">Koiripur</option>

          <option value="4905">Konch</option>

          <option value="4906">Kopaganj</option>

          <option value="4907">Kora Jahanabad</option>

          <option value="4908">Korwa</option>

          <option value="4909">Kosi Kalan</option>

          <option value="4910">Kota</option>

          <option value="4911">Kotra</option>

          <option value="4912">Kotwa</option>

          <option value="4913">Kulpahar</option>

          <option value="4914">Kunda</option>

          <option value="4915">Kundarki</option>

          <option value="4916">Kunwargaon</option>

          <option value="4917">Kurara</option>

          <option value="4918">Kurawali</option>

          <option value="4919">Kursath</option>

          <option value="4920">Kurthi Jafarpur</option>

          <option value="4921">Kushinagar</option>

          <option value="4922">Kusmara</option>

          <option value="4923">Laharpur</option>

          <option value="4924">Lakhimpur</option>

          <option value="4925">Lakhna</option>

          <option value="4926">Lalganj</option>

          <option value="4927">Lalitpur</option>

          <option value="4928">Lar</option>

          <option value="4929">Lawar</option>

          <option value="4930">Ledwa Mahuwa</option>

          <option value="4931">Lohta</option>

          <option value="4932">Loni</option>

          <option value="4933">Lucknow</option>

          <option value="4934">Machhlishahr</option>

          <option value="4935">Madhoganj</option>

          <option value="4936">Madhogarh</option>

          <option value="4937">Maghar</option>

          <option value="4938">Mahaban</option>

          <option value="4939">Maharajganj</option>

          <option value="4940">Mahmudabad</option>

          <option value="4941">Mahoba</option>

          <option value="4942">Maholi</option>

          <option value="4943">Mahona</option>

          <option value="4944">Mahroni</option>

          <option value="4945">Mailani</option>

          <option value="4946">Mainpuri</option>

          <option value="4947">Majhara Pipar Ehatmali</option>

          <option value="4948">Majhauli Raj</option>

          <option value="4949">Malihabad</option>

          <option value="4950">Mallanwam</option>

          <option value="4951">Mandawar</option>

          <option value="4952">Manikpur</option>

          <option value="4953">Maniyar</option>

          <option value="4954">Manjhanpur</option>

          <option value="4955">Mankapur</option>

          <option value="4956">Marehra</option>

          <option value="4957">Mariahu</option>

          <option value="4958">Maruadih</option>

          <option value="4959">Maswasi</option>

          <option value="4960">Mataundh</option>

          <option value="4961">Mathu</option>

          <option value="4962">Mathura</option>

          <option value="4963">Mathura Cantonment</option>

          <option value="4964">Mau</option>

          <option value="4965">Mau Aima</option>

          <option value="4966">Maudaha</option>

          <option value="4967">Mauranipur</option>

          <option value="4968">Maurawan</option>

          <option value="4969">Mawana</option>

          <option value="4970">Meerut</option>

          <option value="4971">Mehnagar</option>

          <option value="4972">Mehndawal</option>

          <option value="4973">Mendu</option>

          <option value="4974">Milak</option>

          <option value="4975">Miranpur</option>

          <option value="4976">Mirat</option>

          <option value="4977">Mirat Cantonment</option>

          <option value="4978">Mirganj</option>

          <option value="4979">Mirzapur</option>

          <option value="4980">Misrikh</option>

          <option value="4981">Modinagar</option>

          <option value="4982">Mogra Badshahpur</option>

          <option value="4983">Mohan</option>

          <option value="4984">Mohanpur</option>

          <option value="4985">Mohiuddinpur</option>

          <option value="4986">Moradabad</option>

          <option value="4987">Moth</option>

          <option value="4988">Mubarakpur</option>

          <option value="4989">Mughal Sarai</option>

          <option value="4990">Mughal Sarai Railway Settlemen</option>

          <option value="4991">Muhammadabad</option>

          <option value="4992">Muhammadi</option>

          <option value="4993">Mukrampur Khema</option>

          <option value="4994">Mundia</option>

          <option value="4995">Mundora</option>

          <option value="4996">Muradnagar</option>

          <option value="4997">Mursan</option>

          <option value="4998">Musafirkhana</option>

          <option value="4999">Muzaffarnagar</option>

          <option value="5000">Nadigaon</option>

          <option value="5001">Nagina</option>

          <option value="5002">Nagram</option>

          <option value="5003">Nai Bazar</option>

          <option value="5004">Nainana Jat</option>

          <option value="5005">Najibabad</option>

          <option value="5006">Nakur</option>

          <option value="5007">Nanaunta</option>

          <option value="5008">Nandgaon</option>

          <option value="5009">Nanpara</option>

          <option value="5010">Naraini</option>

          <option value="5011">Narauli</option>

          <option value="5012">Naraura</option>

          <option value="5013">Naugawan Sadat</option>

          <option value="5014">Nautanwa</option>

          <option value="5015">Nawabganj</option>

          <option value="5016">Nichlaul</option>

          <option value="5017">Nidhauli Kalan</option>

          <option value="5018">Nihtaur</option>

          <option value="5019">Nindaura</option>

          <option value="5020">Niwari</option>

          <option value="5021">Nizamabad</option>

          <option value="5022">Noida</option>

          <option value="5023">Northern Railway Colony</option>

          <option value="5024">Nurpur</option>

          <option value="5025">Nyoria Husenpur</option>

          <option value="5026">Nyotini</option>

          <option value="5027">Obra</option>

          <option value="5028">Oel Dhakwa</option>

          <option value="5029">Orai</option>

          <option value="5030">Oran</option>

          <option value="5031">Ordinance Factory Muradnagar</option>

          <option value="5032">Pachperwa</option>

          <option value="5033">Padrauna</option>

          <option value="5034">Pahasu</option>

          <option value="5035">Paintepur</option>

          <option value="5036">Pali</option>

          <option value="5037">Palia Kalan</option>

          <option value="5038">Parasi</option>

          <option value="5039">Parichha</option>

          <option value="5040">Parichhatgarh</option>

          <option value="5041">Parsadepur</option>

          <option value="5042">Patala</option>

          <option value="5043">Patiyali</option>

          <option value="5044">Patti</option>

          <option value="5045">Pawayan</option>

          <option value="5046">Phalauda</option>

          <option value="5047">Phaphund</option>

          <option value="5048">Phulpur</option>

          <option value="5049">Phulwaria</option>

          <option value="5050">Pihani</option>

          <option value="5051">Pilibhit</option>

          <option value="5052">Pilkana</option>

          <option value="5053">Pilkhuwa</option>

          <option value="5054">Pinahat</option>

          <option value="5055">Pipalsana Chaudhari</option>

          <option value="5056">Pipiganj</option>

          <option value="5057">Pipraich</option>

          <option value="5058">Pipri</option>

          <option value="5059">Pratapgarh</option>

          <option value="5060">Pukhrayan</option>

          <option value="5061">Puranpur</option>

          <option value="5062">Purdil Nagar</option>

          <option value="5063">Purqazi</option>

          <option value="5064">Purwa</option>

          <option value="5065">Qasimpur</option>

          <option value="5066">Rabupura</option>

          <option value="5067">Radha Kund</option>

          <option value="5068">Rae Bareilly</option>

          <option value="5069">Raja Ka Rampur</option>

          <option value="5070">Rajapur</option>

          <option value="5071">Ramkola</option>

          <option value="5072">Ramnagar</option>

          <option value="5073">Rampur</option>

          <option value="5074">Rampur Bhawanipur</option>

          <option value="5075">Rampur Karkhana</option>

          <option value="5076">Rampur Maniharan</option>

          <option value="5077">Rampura</option>

          <option value="5078">Ranipur</option>

          <option value="5079">Rashidpur Garhi</option>

          <option value="5080">Rasra</option>

          <option value="5081">Rasulabad</option>

          <option value="5082">Rath</option>

          <option value="5083">Raya</option>

          <option value="5084">Renukut</option>

          <option value="5085">Reoti</option>

          <option value="5086">Richha</option>

          <option value="5087">Risia Bazar</option>

          <option value="5088">Rithora</option>

          <option value="5089">Robertsganj</option>

          <option value="5090">Roza</option>

          <option value="5091">Rudarpur</option>

          <option value="5092">Rudauli</option>

          <option value="5093">Rudayan</option>

          <option value="5094">Rura</option>

          <option value="5095">Rustamnagar Sahaspur</option>

          <option value="5096">Sabatwar</option>

          <option value="5097">Sadabad</option>

          <option value="5098">Sadat</option>

          <option value="5099">Safipur</option>

          <option value="5100">Sahanpur</option>

          <option value="5101">Saharanpur</option>

          <option value="5102">Sahaspur</option>

          <option value="5103">Sahaswan</option>

          <option value="5104">Sahawar</option>

          <option value="5105">Sahibabad</option>

          <option value="5106">Sahjanwa</option>

          <option value="5107">Sahpau</option>

          <option value="5108">Saidpur</option>

          <option value="5109">Sainthal</option>

          <option value="5110">Saiyadraja</option>

          <option value="5111">Sakhanu</option>

          <option value="5112">Sakit</option>

          <option value="5113">Salarpur Khadar</option>

          <option value="5114">Salimpur</option>

          <option value="5115">Salon</option>

          <option value="5116">Sambhal</option>

          <option value="5117">Sambhawali</option>

          <option value="5118">Samdhan</option>

          <option value="5119">Samthar</option>

          <option value="5120">Sandi</option>

          <option value="5121">Sandila</option>

          <option value="5122">Sarai Mir</option>

          <option value="5123">Sarai akil</option>

          <option value="5124">Sarauli</option>

          <option value="5125">Sardhana</option>

          <option value="5126">Sarila</option>

          <option value="5127">Sarsawan</option>

          <option value="5128">Sasni</option>

          <option value="5129">Satrikh</option>

          <option value="5130">Saunkh</option>

          <option value="5131">Saurikh</option>

          <option value="5132">Seohara</option>

          <option value="5133">Sewal Khas</option>

          <option value="5134">Sewarhi</option>

          <option value="5135">Shahabad</option>

          <option value="5136">Shahganj</option>

          <option value="5137">Shahi</option>

          <option value="5138">Shahjahanpur</option>

          <option value="5139">Shahjahanpur Cantonment</option>

          <option value="5140">Shahpur</option>

          <option value="5141">Shamli</option>

          <option value="5142">Shamsabad</option>

          <option value="5143">Shankargarh</option>

          <option value="5144">Shergarh</option>

          <option value="5145">Sherkot</option>

          <option value="5146">Shikarpur</option>

          <option value="5147">Shikohabad</option>

          <option value="5148">Shisgarh</option>

          <option value="5149">Shivdaspur</option>

          <option value="5150">Shivli</option>

          <option value="5151">Shivrajpur</option>

          <option value="5152">Shohratgarh</option>

          <option value="5153">Siddhanur</option>

          <option value="5154">Siddharthnagar</option>

          <option value="5155">Sidhauli</option>

          <option value="5156">Sidhpura</option>

          <option value="5157">Sikandarabad</option>

          <option value="5158">Sikandarpur</option>

          <option value="5159">Sikandra</option>

          <option value="5160">Sikandra Rao</option>

          <option value="5161">Singahi Bhiraura</option>

          <option value="5162">Sirathu</option>

          <option value="5163">Sirsa</option>

          <option value="5164">Sirsaganj</option>

          <option value="5165">Sirsi</option>

          <option value="5166">Sisauli</option>

          <option value="5167">Siswa Bazar</option>

          <option value="5168">Sitapur</option>

          <option value="5169">Siyana</option>

          <option value="5170">Som</option>

          <option value="5171">Sonbhadra</option>

          <option value="5172">Soron</option>

          <option value="5173">Suar</option>

          <option value="5174">Sukhmalpur Nizamabad</option>

          <option value="5175">Sultanpur</option>

          <option value="5176">Sumerpur</option>

          <option value="5177">Suriyawan</option>

          <option value="5178">Swamibagh</option>

          <option value="5179">Tajpur</option>

          <option value="5180">Talbahat</option>

          <option value="5181">Talgram</option>

          <option value="5182">Tambaur</option>

          <option value="5183">Tanda</option>

          <option value="5184">Tatarpur Lallu</option>

          <option value="5185">Tetribazar</option>

          <option value="5186">Thakurdwara</option>

          <option value="5187">Thana Bhawan</option>

          <option value="5188">Thiriya Nizamat Khan</option>

          <option value="5189">Tikaitnagar</option>

          <option value="5190">Tikri</option>

          <option value="5191">Tilhar</option>

          <option value="5192">Tindwari</option>

          <option value="5193">Tirwaganj</option>

          <option value="5194">Titron</option>

          <option value="5195">Tori Fatehpur</option>

          <option value="5196">Tulsipur</option>

          <option value="5197">Tundla</option>

          <option value="5198">Tundla Kham</option>

          <option value="5199">Tundla Railway Colony</option>

          <option value="5200">Ugu</option>

          <option value="5201">Ujhani</option>

          <option value="5202">Ujhari</option>

          <option value="5203">Umri</option>

          <option value="5204">Umri Kalan</option>

          <option value="5205">Un</option>

          <option value="5206">Unchahar</option>

          <option value="5207">Unnao</option>

          <option value="5208">Usaihat</option>

          <option value="5209">Usawan</option>

          <option value="5210">Utraula</option>

          <option value="5211">Varanasi</option>

          <option value="5212">Varanasi Cantonment</option>

          <option value="5213">Vijaigarh</option>

          <option value="5214">Vrindavan</option>

          <option value="5215">Wazirganj</option>

          <option value="5216">Zafarabad</option>

          <option value="5217">Zaidpur</option>

          <option value="5218">Zamania</option>

          <option value="5219">Almora</option>

          <option value="5220">Almora Cantonment</option>

          <option value="5221">Badrinathpuri</option>

          <option value="5222">Bageshwar</option>

          <option value="5223">Bah Bazar</option>

          <option value="5224">Banbasa</option>

          <option value="5225">Bandia</option>

          <option value="5226">Barkot</option>

          <option value="5227">Bazpur</option>

          <option value="5228">Bhim Tal</option>

          <option value="5229">Bhowali</option>

          <option value="5230">Chakrata</option>

          <option value="5231">Chamba</option>

          <option value="5232">Chamoli and Gopeshwar</option>

          <option value="5233">Champawat</option>

          <option value="5234">Clement Town</option>

          <option value="5235">Dehra Dun Cantonment</option>

          <option value="5236">Dehradun</option>

          <option value="5237">Dehrakhas</option>

          <option value="5238">Devaprayag</option>

          <option value="5239">Dhaluwala</option>

          <option value="5240">Dhandera</option>

          <option value="5241">Dharchula</option>

          <option value="5242">Dharchula Dehat</option>

          <option value="5243">Didihat</option>

          <option value="5244">Dineshpur</option>

          <option value="5245">Doiwala</option>

          <option value="5246">Dugadda</option>

          <option value="5247">Dwarahat</option>

          <option value="5248">Gadarpur</option>

          <option value="5249">Gangotri</option>

          <option value="5250">Gauchar</option>

          <option value="5251">Haldwani</option>

          <option value="5252">Haridwar</option>

          <option value="5253">Herbertpur</option>

          <option value="5254">Jaspur</option>

          <option value="5255">Jhabrera</option>

          <option value="5256">Joshimath</option>

          <option value="5257">Kachnal Gosain</option>

          <option value="5258">Kaladungi</option>

          <option value="5259">Kalagarh</option>

          <option value="5260">Karnaprayang</option>

          <option value="5261">Kashipur</option>

          <option value="5262">Kashirampur</option>

          <option value="5263">Kausani</option>

          <option value="5264">Kedarnath</option>

          <option value="5265">Kelakhera</option>

          <option value="5266">Khatima</option>

          <option value="5267">Kichha</option>

          <option value="5268">Kirtinagar</option>

          <option value="5269">Kotdwara</option>

          <option value="5270">Laksar</option>

          <option value="5271">Lalkuan</option>

          <option value="5272">Landaura</option>

          <option value="5273">Landhaura Cantonment</option>

          <option value="5274">Lensdaun</option>

          <option value="5275">Logahat</option>

          <option value="5276">Mahua Dabra Haripura</option>

          <option value="5277">Mahua Kheraganj</option>

          <option value="5278">Manglaur</option>

          <option value="5279">Masuri</option>

          <option value="5280">Mohanpur Mohammadpur</option>

          <option value="5281">Muni Ki Reti</option>

          <option value="5282">Nagla</option>

          <option value="5283">Nainital</option>

          <option value="5284">Nainital Cantonment</option>

          <option value="5285">Nandaprayang</option>

          <option value="5286">Narendranagar</option>

          <option value="5287">Pauri</option>

          <option value="5288">Pithoragarh</option>

          <option value="5289">Pratitnagar</option>

          <option value="5290">Raipur</option>

          <option value="5291">Raiwala</option>

          <option value="5292">Ramnagar</option>

          <option value="5293">Ranikhet</option>

          <option value="5294">Ranipur</option>

          <option value="5295">Rishikesh</option>

          <option value="5296">Rishikesh Cantonment</option>

          <option value="5297">Roorkee</option>

          <option value="5298">Rudraprayag</option>

          <option value="5299">Rudrapur</option>

          <option value="5300">Rurki</option>

          <option value="5301">Rurki Cantonment</option>

          <option value="5302">Shaktigarh</option>

          <option value="5303">Sitarganj</option>

          <option value="5304">Srinagar</option>

          <option value="5305">Sultanpur</option>

          <option value="5306">Tanakpur</option>

          <option value="5307">Tehri</option>

          <option value="5308">Udham Singh Nagar</option>

          <option value="5309">Uttarkashi</option>

          <option value="5310">Vikasnagar</option>

          <option value="5311">Virbhadra</option>

          <option value="5312">24 Parganas (n)</option>

          <option value="5313">24 Parganas (s)</option>

          <option value="5314">Adra</option>

          <option value="5315">Ahmadpur</option>

          <option value="5316">Aiho</option>

          <option value="5317">Aistala</option>

          <option value="5318">Alipur Duar</option>

          <option value="5319">Alipur Duar Railway Junction</option>

          <option value="5320">Alpur</option>

          <option value="5321">Amalhara</option>

          <option value="5322">Amkula</option>

          <option value="5323">Amlagora</option>

          <option value="5324">Amodghata</option>

          <option value="5325">Amtala</option>

          <option value="5326">Andul</option>

          <option value="5327">Anksa</option>

          <option value="5328">Ankurhati</option>

          <option value="5329">Anup Nagar</option>

          <option value="5330">Arambagh</option>

          <option value="5331">Argari</option>

          <option value="5332">Arsha</option>

          <option value="5333">Asansol</option>

          <option value="5334">Ashoknagar Kalyangarh</option>

          <option value="5335">Aurangabad</option>

          <option value="5336">Bablari Dewanganj</option>

          <option value="5337">Badhagachhi</option>

          <option value="5338">Baduria</option>

          <option value="5339">Baghdogra</option>

          <option value="5340">Bagnan</option>

          <option value="5341">Bagra</option>

          <option value="5342">Bagula</option>

          <option value="5343">Baharampur</option>

          <option value="5344">Bahirgram</option>

          <option value="5345">Bahula</option>

          <option value="5346">Baidyabati</option>

          <option value="5347">Bairatisal</option>

          <option value="5348">Baj Baj</option>

          <option value="5349">Bakreswar</option>

          <option value="5350">Balaram Pota</option>

          <option value="5351">Balarampur</option>

          <option value="5352">Bali Chak</option>

          <option value="5353">Ballavpur</option>

          <option value="5354">Bally</option>

          <option value="5355">Balurghat</option>

          <option value="5356">Bamunari</option>

          <option value="5357">Banarhat Tea Garden</option>

          <option value="5358">Bandel</option>

          <option value="5359">Bangaon</option>

          <option value="5360">Bankra</option>

          <option value="5361">Bankura</option>

          <option value="5362">Bansbaria</option>

          <option value="5363">Banshra</option>

          <option value="5364">Banupur</option>

          <option value="5365">Bara Bamonia</option>

          <option value="5366">Barakpur</option>

          <option value="5367">Barakpur Cantonment</option>

          <option value="5368">Baranagar</option>

          <option value="5369">Barasat</option>

          <option value="5370">Barddhaman</option>

          <option value="5371">Barijhati</option>

          <option value="5372">Barjora</option>

          <option value="5373">Barrackpore</option>

          <option value="5374">Baruihuda</option>

          <option value="5375">Baruipur</option>

          <option value="5376">Barunda</option>

          <option value="5377">Basirhat</option>

          <option value="5378">Baska</option>

          <option value="5379">Begampur</option>

          <option value="5380">Beldanga</option>

          <option value="5381">Beldubi</option>

          <option value="5382">Belebathan</option>

          <option value="5383">Beliator</option>

          <option value="5384">Bhadreswar</option>

          <option value="5385">Bhandardaha</option>

          <option value="5386">Bhangar Raghunathpur</option>

          <option value="5387">Bhangri Pratham Khanda</option>

          <option value="5388">Bhanowara</option>

          <option value="5389">Bhatpara</option>

          <option value="5390">Bholar Dabri</option>

          <option value="5391">Bidhannagar</option>

          <option value="5392">Bidyadharpur</option>

          <option value="5393">Biki Hakola</option>

          <option value="5394">Bilandapur</option>

          <option value="5395">Bilpahari</option>

          <option value="5396">Bipra Noapara</option>

          <option value="5397">Birlapur</option>

          <option value="5398">Birnagar</option>

          <option value="5399">Bisarpara</option>

          <option value="5400">Bishnupur</option>

          <option value="5401">Bolpur</option>

          <option value="5402">Bongaon</option>

          <option value="5403">Bowali</option>

          <option value="5404">Burdwan</option>

          <option value="5405">Canning</option>

          <option value="5406">Cart Road</option>

          <option value="5407">Chachanda</option>

          <option value="5408">Chak Bankola</option>

          <option value="5409">Chak Enayetnagar</option>

          <option value="5410">Chak Kashipur</option>

          <option value="5411">Chakalampur</option>

          <option value="5412">Chakbansberia</option>

          <option value="5413">Chakdaha</option>

          <option value="5414">Chakpara</option>

          <option value="5415">Champahati</option>

          <option value="5416">Champdani</option>

          <option value="5417">Chamrail</option>

          <option value="5418">Chandannagar</option>

          <option value="5419">Chandpur</option>

          <option value="5420">Chandrakona</option>

          <option value="5421">Chapari</option>

          <option value="5422">Chapui</option>

          <option value="5423">Char Brahmanagar</option>

          <option value="5424">Char Maijdia</option>

          <option value="5425">Charka</option>

          <option value="5426">Chata Kalikapur</option>

          <option value="5427">Chauhati</option>

          <option value="5428">Checha Khata</option>

          <option value="5429">Chelad</option>

          <option value="5430">Chhora</option>

          <option value="5431">Chikrand</option>

          <option value="5432">Chittaranjan</option>

          <option value="5433">Contai</option>

          <option value="5434">Cooch Behar</option>

          <option value="5435">Dainhat</option>

          <option value="5436">Dakshin Baguan</option>

          <option value="5437">Dakshin Jhapardaha</option>

          <option value="5438">Dakshin Rajyadharpur</option>

          <option value="5439">Dakshin Raypur</option>

          <option value="5440">Dalkola</option>

          <option value="5441">Dalurband</option>

          <option value="5442">Darap Pur</option>

          <option value="5443">Darjiling</option>

          <option value="5444">Daulatpur</option>

          <option value="5445">Debipur</option>

          <option value="5446">Defahat</option>

          <option value="5447">Deora</option>

          <option value="5448">Deulia</option>

          <option value="5449">Dhakuria</option>

          <option value="5450">Dhandadihi</option>

          <option value="5451">Dhanyakuria</option>

          <option value="5452">Dharmapur</option>

          <option value="5453">Dhatri Gram</option>

          <option value="5454">Dhuilya</option>

          <option value="5455">Dhulagari</option>

          <option value="5456">Dhulian</option>

          <option value="5457">Dhupgari</option>

          <option value="5458">Dhusaripara</option>

          <option value="5459">Diamond Harbour</option>

          <option value="5460">Digha</option>

          <option value="5461">Dignala</option>

          <option value="5462">Dinhata</option>

          <option value="5463">Dubrajpur</option>

          <option value="5464">Dumjor</option>

          <option value="5465">Durgapur</option>

          <option value="5466">Durllabhganj</option>

          <option value="5467">Egra</option>

          <option value="5468">Eksara</option>

          <option value="5469">Falakata</option>

          <option value="5470">Farakka</option>

          <option value="5471">Fatellapur</option>

          <option value="5472">Fort Gloster</option>

          <option value="5473">Gabberia</option>

          <option value="5474">Gadigachha</option>

          <option value="5475">Gairkata</option>

          <option value="5476">Gangarampur</option>

          <option value="5477">Garalgachha</option>

          <option value="5478">Garbeta Amlagora</option>

          <option value="5479">Garhbeta</option>

          <option value="5480">Garshyamnagar</option>

          <option value="5481">Garui</option>

          <option value="5482">Garulia</option>

          <option value="5483">Gayespur</option>

          <option value="5484">Ghatal</option>

          <option value="5485">Ghorsala</option>

          <option value="5486">Goaljan</option>

          <option value="5487">Goasafat</option>

          <option value="5488">Gobardanga</option>

          <option value="5489">Gobindapur</option>

          <option value="5490">Gopalpur</option>

          <option value="5491">Gopinathpur</option>

          <option value="5492">Gora Bazar</option>

          <option value="5493">Guma</option>

          <option value="5494">Gurdaha</option>

          <option value="5495">Guriahati</option>

          <option value="5496">Guskhara</option>

          <option value="5497">Habra</option>

          <option value="5498">Haldia</option>

          <option value="5499">Haldibari</option>

          <option value="5500">Halisahar</option>

          <option value="5501">Haora</option>

          <option value="5502">Harharia Chak</option>

          <option value="5503">Harindanga</option>

          <option value="5504">Haringhata</option>

          <option value="5505">Haripur</option>

          <option value="5506">Harishpur</option>

          <option value="5507">Hatgachha</option>

          <option value="5508">Hatsimla</option>

          <option value="5509">Hijuli</option>

          <option value="5510">Hindustan Cables Town</option>

          <option value="5511">Hooghly</option>

          <option value="5512">Howrah</option>

          <option value="5513">Hugli-Chunchura</option>

          <option value="5514">Humaipur</option>

          <option value="5515">Ichha Pur Defence Estate</option>

          <option value="5516">Ingraj Bazar</option>

          <option value="5517">Islampur</option>

          <option value="5518">Jafarpur</option>

          <option value="5519">Jagadanandapur</option>

          <option value="5520">Jagdishpur</option>

          <option value="5521">Jagtaj</option>

          <option value="5522">Jala Kendua</option>

          <option value="5523">Jaldhaka</option>

          <option value="5524">Jalkhura</option>

          <option value="5525">Jalpaiguri</option>

          <option value="5526">Jamuria</option>

          <option value="5527">Jangipur</option>

          <option value="5528">Jaygaon</option>

          <option value="5529">Jaynagar-Majilpur</option>

          <option value="5530">Jemari</option>

          <option value="5531">Jemari Township</option>

          <option value="5532">Jetia</option>

          <option value="5533">Jhalida</option>

          <option value="5534">Jhargram</option>

          <option value="5535">Jhorhat</option>

          <option value="5536">Jiaganj-Azimganj</option>

          <option value="5537">Joka</option>

          <option value="5538">Jot Kamal</option>

          <option value="5539">Kachu Pukur</option>

          <option value="5540">Kajora</option>

          <option value="5541">Kakdihi</option>

          <option value="5542">Kakdwip</option>

          <option value="5543">Kalaikunda</option>

          <option value="5544">Kalara</option>

          <option value="5545">Kalimpong</option>

          <option value="5546">Kaliyaganj</option>

          <option value="5547">Kalna</option>

          <option value="5548">Kalyani</option>

          <option value="5549">Kamarhati</option>

          <option value="5550">Kanaipur</option>

          <option value="5551">Kanchrapara</option>

          <option value="5552">Kandi</option>

          <option value="5553">Kanki</option>

          <option value="5554">Kankuria</option>

          <option value="5555">Kantlia</option>

          <option value="5556">Kanyanagar</option>

          <option value="5557">Karimpur</option>

          <option value="5558">Karsiyang</option>

          <option value="5559">Kasba</option>

          <option value="5560">Kasimbazar</option>

          <option value="5561">Katwa</option>

          <option value="5562">Kaugachhi</option>

          <option value="5563">Kenda</option>

          <option value="5564">Kendra Khottamdi</option>

          <option value="5565">Kendua</option>

          <option value="5566">Kesabpur</option>

          <option value="5567">Khagrabari</option>

          <option value="5568">Khalia</option>

          <option value="5569">Khalor</option>

          <option value="5570">Khandra</option>

          <option value="5571">Khantora</option>

          <option value="5572">Kharagpur</option>

          <option value="5573">Kharagpur Railway Settlement</option>

          <option value="5574">Kharar</option>

          <option value="5575">Khardaha</option>

          <option value="5576">Khari Mala Khagrabari</option>

          <option value="5577">Kharsarai</option>

          <option value="5578">Khatra</option>

          <option value="5579">Khodarampur</option>

          <option value="5580">Kodalia</option>

          <option value="5581">Kolaghat</option>

          <option value="5582">Kolaghat Thermal Power Project</option>

          <option value="5583">Kolkata</option>

          <option value="5584">Konardihi</option>

          <option value="5585">Konnogar</option>

          <option value="5586">Krishnanagar</option>

          <option value="5587">Krishnapur</option>

          <option value="5588">Kshidirpur</option>

          <option value="5589">Kshirpai</option>

          <option value="5590">Kulihanda</option>

          <option value="5591">Kulti</option>

          <option value="5592">Kunustara</option>

          <option value="5593">Kuperskem</option>

          <option value="5594">Madanpur</option>

          <option value="5595">Madhusudanpur</option>

          <option value="5596">Madhyamgram</option>

          <option value="5597">Maheshtala</option>

          <option value="5598">Mahiari</option>

          <option value="5599">Mahikpur</option>

          <option value="5600">Mahira</option>

          <option value="5601">Mahishadal</option>

          <option value="5602">Mainaguri</option>

          <option value="5603">Makardaha</option>

          <option value="5604">Mal</option>

          <option value="5605">Malda</option>

          <option value="5606">Mandarbani</option>

          <option value="5607">Mansinhapur</option>

          <option value="5608">Masila</option>

          <option value="5609">Maslandapur</option>

          <option value="5610">Mathabhanga</option>

          <option value="5611">Mekliganj</option>

          <option value="5612">Memari</option>

          <option value="5613">Midnapur</option>

          <option value="5614">Mirik</option>

          <option value="5615">Monoharpur</option>

          <option value="5616">Mrigala</option>

          <option value="5617">Muragachha</option>

          <option value="5618">Murgathaul</option>

          <option value="5619">Murshidabad</option>

          <option value="5620">Nabadhai Dutta Pukur</option>

          <option value="5621">Nabagram</option>

          <option value="5622">Nabgram</option>

          <option value="5623">Nachhratpur Katabari</option>

          <option value="5624">Nadia</option>

          <option value="5625">Naihati</option>

          <option value="5626">Nalhati</option>

          <option value="5627">Nasra</option>

          <option value="5628">Natibpur</option>

          <option value="5629">Naupala</option>

          <option value="5630">Navadwip</option>

          <option value="5631">Nebadhai Duttapukur</option>

          <option value="5632">New Barrackpore</option>

          <option value="5633">Ni Barakpur</option>

          <option value="5634">Nibra</option>

          <option value="5635">Noapara</option>

          <option value="5636">Nokpul</option>

          <option value="5637">North Barakpur</option>

          <option value="5638">Odlabari</option>

          <option value="5639">Old Maldah</option>

          <option value="5640">Ondal</option>

          <option value="5641">Pairagachha</option>

          <option value="5642">Palashban</option>

          <option value="5643">Panchla</option>

          <option value="5644">Panchpara</option>

          <option value="5645">Pandua</option>

          <option value="5646">Pangachhiya</option>

          <option value="5647">Paniara</option>

          <option value="5648">Panihati</option>

          <option value="5649">Panuhat</option>

          <option value="5650">Par Beliya</option>

          <option value="5651">Parashkol</option>

          <option value="5652">Parasia</option>

          <option value="5653">Parbbatipur</option>

          <option value="5654">Parui</option>

          <option value="5655">Paschim Jitpur</option>

          <option value="5656">Paschim Punro Para</option>

          <option value="5657">Patrasaer</option>

          <option value="5658">Pattabong Tea Garden</option>

          <option value="5659">Patuli</option>

          <option value="5660">Patulia</option>

          <option value="5661">Phulia</option>

          <option value="5662">Podara</option>

          <option value="5663">Port Blair</option>

          <option value="5664">Prayagpur</option>

          <option value="5665">Pujali</option>

          <option value="5666">Purba Medinipur</option>

          <option value="5667">Purba Tajpur</option>

          <option value="5668">Purulia</option>

          <option value="5669">Raghudebbati</option>

          <option value="5670">Raghudebpur</option>

          <option value="5671">Raghunathchak</option>

          <option value="5672">Raghunathpur</option>

          <option value="5673">Raghunathpur-Dankuni</option>

          <option value="5674">Raghunathpur-Magra</option>

          <option value="5675">Raigachhi</option>

          <option value="5676">Raiganj</option>

          <option value="5677">Raipur</option>

          <option value="5678">Rajarhat Gopalpur</option>

          <option value="5679">Rajpur</option>

          <option value="5680">Ramchandrapur</option>

          <option value="5681">Ramjibanpur</option>

          <option value="5682">Ramnagar</option>

          <option value="5683">Rampur Hat</option>

          <option value="5684">Ranaghat</option>

          <option value="5685">Raniganj</option>

          <option value="5686">Ratibati</option>

          <option value="5687">Raypur</option>

          <option value="5688">Rishra</option>

          <option value="5689">Rishra Cantonment</option>

          <option value="5690">Ruiya</option>

          <option value="5691">Sahajadpur</option>

          <option value="5692">Sahapur</option>

          <option value="5693">Sainthia</option>

          <option value="5694">Salap</option>

          <option value="5695">Sankarpur</option>

          <option value="5696">Sankrail</option>

          <option value="5697">Santoshpur</option>

          <option value="5698">Saontaidih</option>

          <option value="5699">Sarenga</option>

          <option value="5700">Sarpi</option>

          <option value="5701">Satigachha</option>

          <option value="5702">Serpur</option>

          <option value="5703">Shankhanagar</option>

          <option value="5704">Shantipur</option>

          <option value="5705">Shrirampur</option>

          <option value="5706">Siduli</option>

          <option value="5707">Siliguri</option>

          <option value="5708">Simla</option>

          <option value="5709">Singur</option>

          <option value="5710">Sirsha</option>

          <option value="5711">Siuri</option>

          <option value="5712">Sobhaganj</option>

          <option value="5713">Sodpur</option>

          <option value="5714">Sonamukhi</option>

          <option value="5715">Sonatikiri</option>

          <option value="5716">Srikantabati</option>

          <option value="5717">Srirampur</option>

          <option value="5718">Sukdal</option>

          <option value="5719">Taherpur</option>

          <option value="5720">Taki</option>

          <option value="5721">Talbandha</option>

          <option value="5722">Tamluk</option>

          <option value="5723">Tarakeswar</option>

          <option value="5724">Tentulberia</option>

          <option value="5725">Tentulkuli</option>

          <option value="5726">Thermal Power Project</option>

          <option value="5727">Tinsukia</option>

          <option value="5728">Titagarh</option>

          <option value="5729">Tufanganj</option>

          <option value="5730">Ukhra</option>

          <option value="5731">Ula</option>

          <option value="5732">Ulubaria</option>

          <option value="5733">Uttar Durgapur</option>

          <option value="5734">Uttar Goara</option>

          <option value="5735">Uttar Kalas</option>

          <option value="5736">Uttar Kamakhyaguri</option>

          <option value="5737">Uttar Latabari</option>

          <option value="5738">Uttar Mahammadpur</option>

          <option value="5739">Uttar Pirpur</option>

          <option value="5740">Uttar Raypur</option>

          <option value="5741">Uttarpara-Kotrung</option>

          <option value="5742">Abohar</option>

          <option value="5743">Adampur</option>

          <option value="5744">Ahmedgarh</option>

          <option value="5745">Ajnala</option>

          <option value="5746">Akalgarh</option>

          <option value="5747">Alawalpur</option>

          <option value="5748">Amloh</option>

          <option value="5749">Amritsar</option>

          <option value="5750">Amritsar Cantonment</option>

          <option value="5751">Anandpur Sahib</option>

          <option value="5752">Badhni Kalan</option>

          <option value="5753">Bagh Purana</option>

          <option value="5754">Balachaur</option>

          <option value="5755">Banaur</option>

          <option value="5756">Banga</option>

          <option value="5757">Banur</option>

          <option value="5758">Baretta</option>

          <option value="5759">Bariwala</option>

          <option value="5760">Barnala</option>

          <option value="5761">Bassi Pathana</option>

          <option value="5762">Batala</option>

          <option value="5763">Bathinda</option>

          <option value="5764">Begowal</option>

          <option value="5765">Behrampur</option>

          <option value="5766">Bhabat</option>

          <option value="5767">Bhadur</option>

          <option value="5768">Bhankharpur</option>

          <option value="5769">Bharoli Kalan</option>

          <option value="5770">Bhawanigarh</option>

          <option value="5771">Bhikhi</option>

          <option value="5772">Bhikhiwind</option>

          <option value="5773">Bhisiana</option>

          <option value="5774">Bhogpur</option>

          <option value="5775">Bhuch</option>

          <option value="5776">Bhulath</option>

          <option value="5777">Budha Theh</option>

          <option value="5778">Budhlada</option>

          <option value="5779">Chima</option>

          <option value="5780">Chohal</option>

          <option value="5781">Dasuya</option>

          <option value="5782">Daulatpur</option>

          <option value="5783">Dera Baba Nanak</option>

          <option value="5784">Dera Bassi</option>

          <option value="5785">Dhanaula</option>

          <option value="5786">Dharam Kot</option>

          <option value="5787">Dhariwal</option>

          <option value="5788">Dhilwan</option>

          <option value="5789">Dhuri</option>

          <option value="5790">Dinanagar</option>

          <option value="5791">Dirba</option>

          <option value="5792">Doraha</option>

          <option value="5793">Faridkot</option>

          <option value="5794">Fateh Nangal</option>

          <option value="5795">Fatehgarh Churian</option>

          <option value="5796">Fatehgarh Sahib</option>

          <option value="5797">Fazilka</option>

          <option value="5798">Firozpur</option>

          <option value="5799">Firozpur Cantonment</option>

          <option value="5800">Gardhiwala</option>

          <option value="5801">Garhshankar</option>

          <option value="5802">Ghagga</option>

          <option value="5803">Ghanaur</option>

          <option value="5804">Giddarbaha</option>

          <option value="5805">Gobindgarh</option>

          <option value="5806">Goniana</option>

          <option value="5807">Goraya</option>

          <option value="5808">Gurdaspur</option>

          <option value="5809">Guru Har Sahai</option>

          <option value="5810">Hajipur</option>

          <option value="5811">Handiaya</option>

          <option value="5812">Hariana</option>

          <option value="5813">Hoshiarpur</option>

          <option value="5814">Hussainpur</option>

          <option value="5815">Jagraon</option>

          <option value="5816">Jaitu</option>

          <option value="5817">Jalalabad</option>

          <option value="5818">Jalandhar</option>

          <option value="5819">Jalandhar Cantonment</option>

          <option value="5820">Jandiala</option>

          <option value="5821">Jugial</option>

          <option value="5822">Kalanaur</option>

          <option value="5823">Kapurthala</option>

          <option value="5824">Karoran</option>

          <option value="5825">Kartarpur</option>

          <option value="5826">Khamanon</option>

          <option value="5827">Khanauri</option>

          <option value="5828">Khanna</option>

          <option value="5829">Kharar</option>

          <option value="5830">Khem Karan</option>

          <option value="5831">Kot Fatta</option>

          <option value="5832">Kot Isa Khan</option>

          <option value="5833">Kot Kapura</option>

          <option value="5834">Kotkapura</option>

          <option value="5835">Kurali</option>

          <option value="5836">Lalru</option>

          <option value="5837">Lehra Gaga</option>

          <option value="5838">Lodhian Khas</option>

          <option value="5839">Longowal</option>

          <option value="5840">Ludhiana</option>

          <option value="5841">Machhiwara</option>

          <option value="5842">Mahilpur</option>

          <option value="5843">Majitha</option>

          <option value="5844">Makhu</option>

          <option value="5845">Malaut</option>

          <option value="5846">Malerkotla</option>

          <option value="5847">Maloud</option>

          <option value="5848">Mandi Gobindgarh</option>

          <option value="5849">Mansa</option>

          <option value="5850">Maur</option>

          <option value="5851">Moga</option>

          <option value="5852">Mohali</option>

          <option value="5853">Moonak</option>

          <option value="5854">Morinda</option>

          <option value="5855">Mukerian</option>

          <option value="5856">Muktsar</option>

          <option value="5857">Mullanpur Dakha</option>

          <option value="5858">Mullanpur Garibdas</option>

          <option value="5859">Munak</option>

          <option value="5860">Muradpura</option>

          <option value="5861">Nabha</option>

          <option value="5862">Nakodar</option>

          <option value="5863">Nangal</option>

          <option value="5864">Nawashahr</option>

          <option value="5865">Naya Nangal</option>

          <option value="5866">Nehon</option>

          <option value="5867">Nurmahal</option>

          <option value="5868">Pathankot</option>

          <option value="5869">Patiala</option>

          <option value="5870">Patti</option>

          <option value="5871">Pattran</option>

          <option value="5872">Payal</option>

          <option value="5873">Phagwara</option>

          <option value="5874">Phillaur</option>

          <option value="5875">Qadian</option>

          <option value="5876">Rahon</option>

          <option value="5877">Raikot</option>

          <option value="5878">Raja Sansi</option>

          <option value="5879">Rajpura</option>

          <option value="5880">Ram Das</option>

          <option value="5881">Raman</option>

          <option value="5882">Rampura</option>

          <option value="5883">Rayya</option>

          <option value="5884">Rupnagar</option>

          <option value="5885">Rurki Kasba</option>

          <option value="5886">Sahnewal</option>

          <option value="5887">Samana</option>

          <option value="5888">Samrala</option>

          <option value="5889">Sanaur</option>

          <option value="5890">Sangat</option>

          <option value="5891">Sangrur</option>

          <option value="5892">Sansarpur</option>

          <option value="5893">Sardulgarh</option>

          <option value="5894">Shahkot</option>

          <option value="5895">Sham Churasi</option>

          <option value="5896">Shekhpura</option>

          <option value="5897">Sirhind</option>

          <option value="5898">Sri Hargobindpur</option>

          <option value="5899">Sujanpur</option>

          <option value="5900">Sultanpur Lodhi</option>

          <option value="5901">Sunam</option>

          <option value="5902">Talwandi Bhai</option>

          <option value="5903">Talwara</option>

          <option value="5904">Tappa</option>

          <option value="5905">Tarn Taran</option>

          <option value="5906">Urmar Tanda</option>

          <option value="5907">Zira</option>

          <option value="5908">Zirakpur</option>

          <option value="5909">Eshkashem</option>

          <option value="5910">Fayzabad</option>

          <option value="5911">Jurm</option>

          <option value="5912">Khandud</option>

          <option value="5913">Qal'eh-ye Panjeh</option>

          <option value="5914">Bala Morghab</option>

          <option value="5915">Qal'eh-ye Naw</option>

          <option value="5916">Andarab</option>

          <option value="5917">Baghlan</option>

          <option value="5918">Dahaneh-ye Ghawri</option>

          <option value="5919">Nahrin</option>

          <option value="5920">Pol-e Khumri</option>

          <option value="5921">Balkh</option>

          <option value="5922">Dawlatabad</option>

          <option value="5923">Mazar-e Sharif</option>

          <option value="5924">Qarchi Gak</option>

          <option value="5925">Shulgara</option>

          <option value="5926">Tash Gozar</option>

          <option value="5927">Bamiyan</option>

          <option value="5928">Panjab</option>

          <option value="5929">Qil Qal'eh</option>

          <option value="5930">Anar Darreh</option>

          <option value="5931">Farah</option>

          <option value="5932">Shindand</option>

          <option value="5933">Andkhvoy</option>

          <option value="5934">Darzi Ab</option>

          <option value="5935">Dawlatabad</option>

          <option value="5936">Maymanah</option>

          <option value="5937">Chaghcharan</option>

          <option value="5938">Shahrak</option>

          <option value="5939">Taywarah</option>

          <option value="5940">Ghazni</option>

          <option value="5941">Awbeh</option>

          <option value="5942">Eslam Qal'eh</option>

          <option value="5943">Ghurian</option>

          <option value="5944">Herat</option>

          <option value="5945">Karukh</option>

          <option value="5946">Kuhestan</option>

          <option value="5947">Kushk</option>

          <option value="5948">Qarabagh</option>

          <option value="5949">Tawraghudi</option>

          <option value="5950">Tir Pol</option>

          <option value="5951">Zendejan</option>

          <option value="5952">Baghran</option>

          <option value="5953">Darwishan</option>

          <option value="5954">Deh Shu</option>

          <option value="5955">Gereshk</option>

          <option value="5956">Lashkar Gah</option>

          <option value="5957">Sangin</option>

          <option value="5958">Aqchah</option>

          <option value="5959">Qarqin</option>

          <option value="5960">Sang-e Charak</option>

          <option value="5961">Shibarghan</option>

          <option value="5962">Baghrami</option>

          <option value="5963">Kabul</option>

          <option value="5964">Mir Bachchekut</option>

          <option value="5965">Paghman</option>

          <option value="5966">Qarabagh</option>

          <option value="5967">Sarawbi</option>

          <option value="5968">Mahmud-e Raqi</option>

          <option value="5969">Taghab</option>

          <option value="5970">Khawst</option>

          <option value="5971">Asadabad</option>

          <option value="5972">Asmar</option>

          <option value="5973">Mehtar Lam</option>

          <option value="5974">Azraw</option>

          <option value="5975">Baraki Barak</option>

          <option value="5976">Pol-e Alam</option>

          <option value="5977">Achin</option>

          <option value="5978">Batsawul</option>

          <option value="5979">Hugyani</option>

          <option value="5980">Jalalabad</option>

          <option value="5981">Nader Shah Kawt</option>

          <option value="5982">Chahar Burjak</option>

          <option value="5983">Chakhansur</option>

          <option value="5984">Khash</option>

          <option value="5985">Mirabad</option>

          <option value="5986">Rudbar</option>

          <option value="5987">Zaranj</option>

          <option value="5988">Nuristan</option>

          <option value="5989">Orgun</option>

          <option value="5990">Zareh Sharan</option>

          <option value="5991">Zarghun Shahr</option>

          <option value="5992">'Ali Khayl</option>

          <option value="5993">Ghardez</option>

          <option value="5994">Charikar</option>

          <option value="5995">Jabal-os-Saraj</option>

          <option value="5996">Qandahar</option>

          <option value="5997">Dasht-e Archa</option>

          <option value="5998">Emam Saheb</option>

          <option value="5999">Hazart Imam</option>

          <option value="6000">Khanabad</option>

          <option value="6001">Qal'eh-ye Zal</option>

          <option value="6002">Qunduz</option>

          <option value="6003">Aybak</option>

          <option value="6004">Kholm</option>

          <option value="6005">Chah Ab</option>

          <option value="6006">Eshkamesh</option>

          <option value="6007">Farkhar</option>

          <option value="6008">Khwajeh Ghar</option>

          <option value="6009">Rostaq</option>

          <option value="6010">Taloqan</option>

          <option value="6011">Yangi Qal'eh</option>

          <option value="6012">Deh Rawud</option>

          <option value="6013">Gaz Ab</option>

          <option value="6014">Tarin Kawt</option>

          <option value="6015">Uruzgan</option>

          <option value="6016">Gardan Diwal</option>

          <option value="6017">Maydanshahr</option>

          <option value="6018">Qalat-e Ghilzay</option>

          <option value="6019">Berat</option>

          <option value="6020">Polican</option>

          <option value="6021">Ure Vajgurore</option>

          <option value="6022">Bulqize</option>

          <option value="6023">Delvine</option>

          <option value="6024">Bilisht</option>

          <option value="6025">Maqellare</option>

          <option value="6026">Peshkopi</option>

          <option value="6027">Durres</option>

          <option value="6028">Shijak</option>

          <option value="6029">Cerrik</option>

          <option value="6030">Elbasan</option>

          <option value="6031">Kerrabe</option>

          <option value="6032">Fier</option>

          <option value="6033">Patos</option>

          <option value="6034">Roskovec</option>

          <option value="6035">Gjirokaster</option>

          <option value="6036">Libohove</option>

          <option value="6037">Gramsh</option>

          <option value="6038">Krume</option>

          <option value="6039">Kavaje</option>

          <option value="6040">Erseke</option>

          <option value="6041">Leskovik</option>

          <option value="6042">Korce</option>

          <option value="6043">Maliq</option>

          <option value="6044">Fushe-Kruje</option>

          <option value="6045">Kruje</option>

          <option value="6046">Mamurras</option>

          <option value="6047">Milot</option>

          <option value="6048">Kucove</option>

          <option value="6049">Kukes</option>

          <option value="6050">Lac</option>

          <option value="6051">Lezhe</option>

          <option value="6052">Shengjin</option>

          <option value="6053">Librazhd</option>

          <option value="6054">Perrenjas</option>

          <option value="6055">Lushnje</option>

          <option value="6056">Rrogozhine</option>

          <option value="6057">Ballsh</option>

          <option value="6058">Burrel</option>

          <option value="6059">Klos</option>

          <option value="6060">Kraste</option>

          <option value="6061">Ulze</option>

          <option value="6062">Kurbnesh</option>

          <option value="6063">Rreshen</option>

          <option value="6064">Rubik</option>

          <option value="6065">Peqin</option>

          <option value="6066">Kelcyre</option>

          <option value="6067">Permet</option>

          <option value="6068">Pogradec</option>

          <option value="6069">Fierze</option>

          <option value="6070">Fushe-Arrez</option>

          <option value="6071">Puke</option>

          <option value="6072">Konispol</option>

          <option value="6073">Sarande</option>

          <option value="6074">Shkoder</option>

          <option value="6075">Corovode</option>

          <option value="6076">Memaliaj</option>

          <option value="6077">Tepelene</option>

          <option value="6078">Kamze</option>

          <option value="6079">Paskuqan</option>

          <option value="6080">Tirane</option>

          <option value="6081">Vore</option>

          <option value="6082">Bajram Curri</option>

          <option value="6083">Himare</option>

          <option value="6084">Orikum</option>

          <option value="6085">Selenice</option>

          <option value="6086">Vlore</option>

          <option value="6087">Adrar</option>

          <option value="6088">Awlaf</option>

          <option value="6089">Rijan</option>

          <option value="6090">Timimun</option>

          <option value="6091">Hydra</option>

          <option value="6092">Kouba</option>

          <option value="6093">Annabah</option>

          <option value="6094">Birrahhal</option>

          <option value="6095">Saraydih</option>

          <option value="6096">Sidi Amar</option>

          <option value="6097">al-Buni</option>

          <option value="6098">al-Hajar</option>

          <option value="6099">'Abadlah</option>

          <option value="6100">Bani Wanif</option>

          <option value="6101">Bashshar</option>

          <option value="6102">Qanadsan</option>

          <option value="6103">Taghit</option>

          <option value="6104">'Aris</option>

          <option value="6105">'Ayn Tutah</option>

          <option value="6106">Barikah</option>

          <option value="6107">Batnah</option>

          <option value="6108">Marwanah</option>

          <option value="6109">Naghaus</option>

          <option value="6110">Ra's-al-'Ayun</option>

          <option value="6111">Tazult</option>

          <option value="6112">'Ayt Rizin</option>

          <option value="6113">Akbu</option>

          <option value="6114">Amizur</option>

          <option value="6115">Barbasha</option>

          <option value="6116">Bijayah</option>

          <option value="6117">Farrawn</option>

          <option value="6118">Ighram</option>

          <option value="6119">Sadduk</option>

          <option value="6120">Shamini</option>

          <option value="6121">Sidi 'Aysh</option>

          <option value="6122">Taskaryut</option>

          <option value="6123">Tazmalt</option>

          <option value="6124">Timazrit</option>

          <option value="6125">Uz-al-Laqin</option>

          <option value="6126">al-Qasr</option>

          <option value="6127">Awlad Jallal</option>

          <option value="6128">Biskrah</option>

          <option value="6129">Sidi Khalid</option>

          <option value="6130">Sidi Ukbah</option>

          <option value="6131">Tulja</option>

          <option value="6132">Um'ash</option>

          <option value="6133">Zaribat-al-Wad</option>

          <option value="6134">Awlad Salam</option>

          <option value="6135">Awlad Yaysh</option>

          <option value="6136">Bani Khalil</option>

          <option value="6137">Bani Marad</option>

          <option value="6138">Bani Tamu</option>

          <option value="6139">Blidah</option>

          <option value="6140">Bu Arfa</option>

          <option value="6141">Bufarik</option>

          <option value="6142">Buinan</option>

          <option value="6143">Buqara</option>

          <option value="6144">Maftah</option>

          <option value="6145">Muzayah</option>

          <option value="6146">Shabli</option>

          <option value="6147">Shari'ah</option>

          <option value="6148">Shiffa</option>

          <option value="6149">Sidi Mussa</option>

          <option value="6150">Suma</option>

          <option value="6151">Wadi al-Allagh</option>

          <option value="6152">al-'Afrun</option>

          <option value="6153">al-Arba'a</option>

          <option value="6154">'Ayn Bissim</option>

          <option value="6155">Aghbalu</option>

          <option value="6156">Bi'r Ghabalu</option>

          <option value="6157">Buirah</option>

          <option value="6158">Lakhdariyah</option>

          <option value="6159">Shurfa</option>

          <option value="6160">Sur-al-Ghuzlan</option>

          <option value="6161">'Ayn Tayah</option>

          <option value="6162">Awlad Haddaj</option>

          <option value="6163">Awlad Mussa</option>

          <option value="6164">Bani Amran</option>

          <option value="6165">Budwawu</option>

          <option value="6166">Budwawu al-Bahri</option>

          <option value="6167">Bumardas</option>

          <option value="6168">Burj Minayal</option>

          <option value="6169">Dalis</option>

          <option value="6170">Hammadi</option>

          <option value="6171">Issar</option>

          <option value="6172">Khamis-al-Khashnah</option>

          <option value="6173">Nasiriyah</option>

          <option value="6174">Raghayah</option>

          <option value="6175">Sa'abat</option>

          <option value="6176">Tinyah</option>

          <option value="6177">al-Arba'a Tash</option>

          <option value="6178">ar-Ruwibah</option>

          <option value="6179">Ammi Mussa</option>

          <option value="6180">Ghalizan</option>

          <option value="6181">Jidiwiyah</option>

          <option value="6182">Mazunah</option>

          <option value="6183">Sidi Muhammad Ban 'Ali</option>

          <option value="6184">Wadi Rahiyu</option>

          <option value="6185">Zammurah</option>

          <option value="6186">Biryan</option>

          <option value="6187">Bu Nura</option>

          <option value="6188">Ghardaia</option>

          <option value="6189">Ghardayah</option>

          <option value="6190">Matlili</option>

          <option value="6191">al-Ghuli'ah</option>

          <option value="6192">al-Qararah</option>

          <option value="6193">Ilizi</option>

          <option value="6194">Amir 'Abd-al-Qadar</option>

          <option value="6195">Jijili</option>

          <option value="6196">Shifka</option>

          <option value="6197">Tahar</option>

          <option value="6198">al-Miliyah</option>

          <option value="6199">'Ayn Wissarah</option>

          <option value="6200">'Ayn-al-Ibil</option>

          <option value="6201">Birin</option>

          <option value="6202">Dar Shiyukh</option>

          <option value="6203">Hassi Bahbah</option>

          <option value="6204">Jilfah</option>

          <option value="6205">Mis'ad</option>

          <option value="6206">Sharif</option>

          <option value="6207">al-Idrisiyah</option>

          <option value="6208">Khanshalah</option>

          <option value="6209">Sharshar</option>

          <option value="6210">Tawziyanat</option>

          <option value="6211">al-Mahmal</option>

          <option value="6212">'Ayn-al-Hajal</option>

          <option value="6213">'Ayn-al-Milh</option>

          <option value="6214">Bu Sa'adah</option>

          <option value="6215">Hammam Dhala'a</option>

          <option value="6216">Ma'adid</option>

          <option value="6217">Maghra</option>

          <option value="6218">Masilah</option>

          <option value="6219">Sidi 'Aysa</option>

          <option value="6220">Wanugha</option>

          <option value="6221">'Ayn Bu Sif</option>

          <option value="6222">Birwaghiyah</option>

          <option value="6223">Midyah</option>

          <option value="6224">Qasr-al-Bukhari</option>

          <option value="6225">Shillalah</option>

          <option value="6226">Tablat</option>

          <option value="6227">Farjiwah</option>

          <option value="6228">Milah</option>

          <option value="6229">Qararam Quqa</option>

          <option value="6230">Ruwashad</option>

          <option value="6231">Salghum-al-'Ayd</option>

          <option value="6232">Sidi Maruf</option>

          <option value="6233">Sidi Marwan</option>

          <option value="6234">Tajananah</option>

          <option value="6235">Talighmah</option>

          <option value="6236">Wadi Athmaniyah</option>

          <option value="6237">Bu Khanifiyah</option>

          <option value="6238">Muaskar</option>

          <option value="6239">Muhammadiyah</option>

          <option value="6240">Siq</option>

          <option value="6241">Tighinnif</option>

          <option value="6242">Wadi al-Abtal</option>

          <option value="6243">Zahana</option>

          <option value="6244">'Ayn Tadalas</option>

          <option value="6245">Hassi Mamash</option>

          <option value="6246">Mazaghran</option>

          <option value="6247">Mustaghanam</option>

          <option value="6248">Sidi Ali</option>

          <option value="6249">'Ayn Safra</option>

          <option value="6250">Mishriyah</option>

          <option value="6251">Naama</option>

          <option value="6252">Oran</option>

          <option value="6253">Ouargla</option>

          <option value="6254">'Ayn Bardah</option>

          <option value="6255">Bumahra Ahmad</option>

          <option value="6256">Hamman Awlad 'Ali</option>

          <option value="6257">Qalmah</option>

          <option value="6258">Wadi Zinati</option>

          <option value="6259">'Ayn Abid</option>

          <option value="6260">'Ayn Samara</option>

          <option value="6261">Didush Murad</option>

          <option value="6262">Hamma Bu Ziyan</option>

          <option value="6263">Qustantinah</option>

          <option value="6264">Zighut Yusuf</option>

          <option value="6265">al-Khurub</option>

          <option value="6266">'Azzabah</option>

          <option value="6267">Amjaz Adshish</option>

          <option value="6268">Fil Fila</option>

          <option value="6269">Karkira</option>

          <option value="6270">Ramadan Jamal</option>

          <option value="6271">Sakikdah</option>

          <option value="6272">Shataybih</option>

          <option value="6273">Tamalus</option>

          <option value="6274">al-Harush</option>

          <option value="6275">al-Qull</option>

          <option value="6276">'Ayn 'Azl</option>

          <option value="6277">'Ayn Arnat</option>

          <option value="6278">'Ayn Taqrut</option>

          <option value="6279">'Ayn Wilman</option>

          <option value="6280">'Ayn-al-Khabira</option>

          <option value="6281">Bouira</option>

          <option value="6282">Buq'ah</option>

          <option value="6283">Salah Bay</option>

          <option value="6284">Satif</option>

          <option value="6285">Setif</option>

          <option value="6286">Ziyama Mansuriyah</option>

          <option value="6287">al-'Ulmah</option>

          <option value="6288">'Ayn-al-Hajar</option>

          <option value="6289">Sayda'</option>

          <option value="6290">'Ayn Qazzan</option>

          <option value="6291">'Ayn Salah</option>

          <option value="6292">Tamanghasat</option>

          <option value="6293">'Ayn Binyan</option>

          <option value="6294">Bu Isma'il</option>

          <option value="6295">Bu Midfar'ah</option>

          <option value="6296">Damus</option>

          <option value="6297">Duwirah</option>

          <option value="6298">Hajut</option>

          <option value="6299">Hammam Righa</option>

          <option value="6300">Sawlah</option>

          <option value="6301">Shiragha</option>

          <option value="6302">Shirshall</option>

          <option value="6303">Sidi Farj</option>

          <option value="6304">Stawali</option>

          <option value="6305">Tibazah</option>

          <option value="6306">Ziralda</option>

          <option value="6307">al-Qull'ah</option>

          <option value="6308">Bi'r-al-'Itir</option>

          <option value="6309">Hammamat</option>

          <option value="6310">Mursut</option>

          <option value="6311">Shariyah</option>

          <option value="6312">Tibissah</option>

          <option value="6313">Winzah</option>

          <option value="6314">al-'Awaynat</option>

          <option value="6315">Awlad Mimun</option>

          <option value="6316">Bani Mastar</option>

          <option value="6317">Bani Sikran</option>

          <option value="6318">Ghazawat</option>

          <option value="6319">Hannayah</option>

          <option value="6320">Maghniyah</option>

          <option value="6321">Nidruma</option>

          <option value="6322">Ramsh</option>

          <option value="6323">Sabra</option>

          <option value="6324">Shatwan</option>

          <option value="6325">Sibdu</option>

          <option value="6326">Sidi 'Abdallah</option>

          <option value="6327">Tilimsan</option>

          <option value="6328">al-Mansurah</option>

          <option value="6329">Tinduf</option>

          <option value="6330">Thaniyat-al-Had</option>

          <option value="6331">Tisamsilt</option>

          <option value="6332">'Ayn Dhahab</option>

          <option value="6333">Firindah</option>

          <option value="6334">Mahdiyah</option>

          <option value="6335">Mashra'a Asfa</option>

          <option value="6336">Qasr Shillalah</option>

          <option value="6337">Rahuyah</option>

          <option value="6338">Sughar</option>

          <option value="6339">Takhamarat</option>

          <option value="6340">Tiyarat</option>

          <option value="6341">'Ayn Bayda</option>

          <option value="6342">'Ayn Fakrun</option>

          <option value="6343">'Ayn Kirshah</option>

          <option value="6344">'Ayn Malilah</option>

          <option value="6345">Bi'r Shuhada</option>

          <option value="6346">Miskyanah</option>

          <option value="6347">Shamurah</option>

          <option value="6348">Umm-al-Bawaghi</option>

          <option value="6349">'Ayn Biya</option>

          <option value="6350">'Ayn-at-Turk</option>

          <option value="6351">Arzu</option>

          <option value="6352">Bi'r-al-Jir</option>

          <option value="6353">Butlilis</option>

          <option value="6354">Hassi Bu Nif</option>

          <option value="6355">Mars-al-Kabir</option>

          <option value="6356">Qadayal</option>

          <option value="6357">Sidi ash-Shami</option>

          <option value="6358">Wadi Thalatha</option>

          <option value="6359">Wahran</option>

          <option value="6360">al-Ansur</option>

          <option value="6361">as-Saniyah</option>

          <option value="6362">Hassi Mas'ud</option>

          <option value="6363">Nazla</option>

          <option value="6364">Ruwisiyat</option>

          <option value="6365">Tabisbast</option>

          <option value="6366">Tamalhat</option>

          <option value="6367">Tamasin</option>

          <option value="6368">Tayabat-al-Janubiyah</option>

          <option value="6369">Tughghurt</option>

          <option value="6370">Warqla</option>

          <option value="6371">al-Hajirah</option>

          <option value="6372">Aflu</option>

          <option value="6373">Hassi al-Raml</option>

          <option value="6374">al-Aghwat</option>

          <option value="6375">Brizyanah</option>

          <option value="6376">al-Abyad Sidi Shaykh</option>

          <option value="6377">al-Bayadh</option>

          <option value="6378">Bab Azwar</option>

          <option value="6379">Baraki</option>

          <option value="6380">Bir Murad Rais</option>

          <option value="6381">Birkhadam</option>

          <option value="6382">Burj-al-Kiffan</option>

          <option value="6383">Dar-al-Bayda</option>

          <option value="6384">al-Jaza'ir</option>

          <option value="6385">Bayadha</option>

          <option value="6386">Dabilah</option>

          <option value="6387">Hassan 'Abd-al-Karim</option>

          <option value="6388">Hassi Halifa</option>

          <option value="6389">Jama'a</option>

          <option value="6390">Maqran</option>

          <option value="6391">Qamar</option>

          <option value="6392">Raqiba</option>

          <option value="6393">Rubbah</option>

          <option value="6394">Sidi Amran</option>

          <option value="6395">al-Mighair</option>

          <option value="6396">al-Wad</option>

          <option value="6397">'Ayn Maran</option>

          <option value="6398">Abu al-Hassan</option>

          <option value="6399">Bani Hawa</option>

          <option value="6400">Bu Qadir</option>

          <option value="6401">Sidi Ukaskah</option>

          <option value="6402">Tanas</option>

          <option value="6403">Wadi Sali</option>

          <option value="6404">Wadi al-Fiddah</option>

          <option value="6405">ash-Shalif</option>

          <option value="6406">ash-Shattiyah</option>

          <option value="6407">Ban Mahdi</option>

          <option value="6408">Bani Amar</option>

          <option value="6409">Basbas</option>

          <option value="6410">Dariyan</option>

          <option value="6411">Saba'ita Muk</option>

          <option value="6412">al-Qal'ah</option>

          <option value="6413">at-Tarif</option>

          <option value="6414">Afono</option>

          <option value="6415">Alao</option>

          <option value="6416">Alofau</option>

          <option value="6417">Amouli</option>

          <option value="6418">Aoa</option>

          <option value="6419">Atu'u</option>

          <option value="6420">Aua</option>

          <option value="6421">Aunu'u</option>

          <option value="6422">Faga'alu</option>

          <option value="6423">Faga'itua</option>

          <option value="6424">Fagasa</option>

          <option value="6425">Fagatogo</option>

          <option value="6426">Lauli'i</option>

          <option value="6427">Leloaloa</option>

          <option value="6428">Nu'uuli</option>

          <option value="6429">Pago Pago</option>

          <option value="6430">Tula</option>

          <option value="6431">Utulei</option>

          <option value="6432">Vatia</option>

          <option value="6433">Ofu</option>

          <option value="6434">Aoloau</option>

          <option value="6435">Faleniu</option>

          <option value="6436">Futiga</option>

          <option value="6437">Ili'ili</option>

          <option value="6438">Leone</option>

          <option value="6439">Malaeimi</option>

          <option value="6440">Malaeloa-Aitulagi</option>

          <option value="6441">Malaeloa-Ituau</option>

          <option value="6442">Mapusagafou</option>

          <option value="6443">Mesepa</option>

          <option value="6444">Pava'ia'i</option>

          <option value="6445">Tafuna</option>

          <option value="6446">Taputimu</option>

          <option value="6447">Vailoatai</option>

          <option value="6448">Vaitogi</option>

          <option value="6449">Canillo</option>

          <option value="6450">Encamp</option>

          <option value="6451">Ordino</option>

          <option value="6452">Caxito</option>

          <option value="6453">Benguela</option>

          <option value="6454">Lobito</option>

          <option value="6455">Camacupa</option>

          <option value="6456">Catabola</option>

          <option value="6457">Catumbela</option>

          <option value="6458">Chissamba</option>

          <option value="6459">Kuito</option>

          <option value="6460">Cabinda</option>

          <option value="6461">Ondjiva</option>

          <option value="6462">Caala</option>

          <option value="6463">Catchiungo</option>

          <option value="6464">Huambo</option>

          <option value="6465">Longonjo</option>

          <option value="6466">Caconda</option>

          <option value="6467">Caluquembe</option>

          <option value="6468">Lubango</option>

          <option value="6469">Menongue</option>

          <option value="6470">Luanda</option>

          <option value="6471">Malanje</option>

          <option value="6472">Cazaje</option>

          <option value="6473">Leua</option>

          <option value="6474">Luau</option>

          <option value="6475">Luena</option>

          <option value="6476">Lumeje</option>

          <option value="6477">Namibe</option>

          <option value="6478">Camabatela</option>

          <option value="6479">Uige</option>

          <option value="6480">M'banza-Kongo</option>

          <option value="6481">N'zeto</option>

          <option value="6482">Soyo</option>

          <option value="6483">Codrington</option>

          <option value="6484">Catamarca</option>

          <option value="6485">Presidencia Roque Saenz Pena</option>

          <option value="6486">Resistencia</option>

          <option value="6487">Comodoro Rivadavia</option>

          <option value="6488">Puerto Madryn</option>

          <option value="6489">Rawson</option>

          <option value="6490">Trelew</option>

          <option value="6491">Alta Gracia</option>

          <option value="6492">Bell Ville</option>

          <option value="6493">Cordoba</option>

          <option value="6494">Rio Cuarto</option>

          <option value="6495">Rio Tercero</option>

          <option value="6496">San Francisco</option>

          <option value="6497">Villa Carlos Paz</option>

          <option value="6498">Villa Maria</option>

          <option value="6499">Corrientes</option>

          <option value="6500">Goya</option>

          <option value="6501">Mercedes</option>

          <option value="6502">San Lorenzo</option>

          <option value="6503">Formosa</option>

          <option value="6504">Jujuy</option>

          <option value="6505">Libertador General San Martin</option>

          <option value="6506">San Pedro</option>

          <option value="6507">Godoy Cruz</option>

          <option value="6508">Lujan</option>

          <option value="6509">Mendoza</option>

          <option value="6510">Rivadavia</option>

          <option value="6511">San Martin</option>

          <option value="6512">San Rafael</option>

          <option value="6513">Eldorado</option>

          <option value="6514">Obera</option>

          <option value="6515">Posadas</option>

          <option value="6516">Cutral Co</option>

          <option value="6517">Neuquen</option>

          <option value="6518">Salta</option>

          <option value="6519">San Ramon de la Nueva Oran</option>

          <option value="6520">Tartagal</option>

          <option value="6521">Tucuman</option>

          <option value="6522">Ashtarak</option>

          <option value="6523">Talin</option>

          <option value="6524">Ararat</option>

          <option value="6525">Artashat</option>

          <option value="6526">Armavir</option>

          <option value="6527">Vagharshapat</option>

          <option value="6528">Gavar</option>

          <option value="6529">Martuni</option>

          <option value="6530">Sevan</option>

          <option value="6531">Vardenis</option>

          <option value="6532">Abovyan</option>

          <option value="6533">Arzni</option>

          <option value="6534">Charentsavan</option>

          <option value="6535">Hrazdan</option>

          <option value="6536">Akhtala</option>

          <option value="6537">Alaverdi</option>

          <option value="6538">Spitak</option>

          <option value="6539">Stepanavan</option>

          <option value="6540">Tashir</option>

          <option value="6541">Vanadzor</option>

          <option value="6542">Artik</option>

          <option value="6543">Gyumri</option>

          <option value="6544">Stepanakert</option>

          <option value="6545">Angeghakot</option>

          <option value="6546">Goris</option>

          <option value="6547">Kajaran</option>

          <option value="6548">Kapan</option>

          <option value="6549">Meghri</option>

          <option value="6550">Sisian</option>

          <option value="6551">Dilijan</option>

          <option value="6552">Ijevan</option>

          <option value="6553">Yerevan</option>

          <option value="6554">Aruba</option>

          <option value="6555">Glenfield</option>

          <option value="6556">Henderson</option>

          <option value="6557">Milford</option>

          <option value="6558">Balgowlah</option>

          <option value="6559">Balmain</option>

          <option value="6560">Bankstown</option>

          <option value="6561">Camberwell</option>

          <option value="6562">Caulfield</option>

          <option value="6563">Chatswood</option>

          <option value="6564">Cheltenham</option>

          <option value="6565">Cherrybrook</option>

          <option value="6566">Clayton</option>

          <option value="6567">Collingwood</option>

          <option value="6568">Hawthorn</option>

          <option value="6569">Jannnali</option>

          <option value="6570">Knoxfield</option>

          <option value="6571">Melbourne</option>

          <option value="6572">South Oakleigh</option>

          <option value="6573">Cottesole</option>

          <option value="6574">Darch</option>

          <option value="6575">Mullaloo</option>

          <option value="6576">Noranda</option>

          <option value="6577">Osborne Park</option>

          <option value="6578">Willetton</option>

          <option value="6579">Acacia Ridge</option>

          <option value="6580">Aitkenvale</option>

          <option value="6581">Alderley</option>

          <option value="6582">Alexander Hills</option>

          <option value="6583">Archerfield</option>

          <option value="6584">Ashmore</option>

          <option value="6585">Atherton</option>

          <option value="6586">Ayr</option>

          <option value="6587">Beachmere</option>

          <option value="6588">Beenleigh</option>

          <option value="6589">Beerwah</option>

          <option value="6590">Bell</option>

          <option value="6591">Belmont</option>

          <option value="6592">Biloela</option>

          <option value="6593">Birkdale</option>

          <option value="6594">Blackwater</option>

          <option value="6595">Bongaree</option>

          <option value="6596">Bonogin</option>

          <option value="6597">Boonah</option>

          <option value="6598">Bowen</option>

          <option value="6599">Brendale</option>

          <option value="6600">Brisbane</option>

          <option value="6601">Buddina</option>

          <option value="6602">Buderim</option>

          <option value="6603">Bundaberg</option>

          <option value="6604">Bundall</option>

          <option value="6605">Burleigh Heads</option>

          <option value="6606">Burpengary</option>

          <option value="6607">Cabaland</option>

          <option value="6608">Caboolture</option>

          <option value="6609">Cairns</option>

          <option value="6610">Cairns Northern Beaches</option>

          <option value="6611">Caloundra</option>

          <option value="6612">Capalaba</option>

          <option value="6613">Charters Towers</option>

          <option value="6614">Childers</option>

          <option value="6615">Cleveland</option>

          <option value="6616">Coolum Beach</option>

          <option value="6617">Coopers Plain</option>

          <option value="6618">Dalby</option>

          <option value="6619">Deception Bay</option>

          <option value="6620">Eagle Farm</option>

          <option value="6621">Eagleby</option>

          <option value="6622">Emerald</option>

          <option value="6623">Emundi</option>

          <option value="6624">Forest Lake</option>

          <option value="6625">Gatton</option>

          <option value="6626">Gladstone</option>

          <option value="6627">Gold Coast</option>

          <option value="6628">Gowrie Junction</option>

          <option value="6629">Gympie</option>

          <option value="6630">Helensvale</option>

          <option value="6631">Hervey Bay</option>

          <option value="6632">Ingham</option>

          <option value="6633">Innisfail</option>

          <option value="6634">Ipswich</option>

          <option value="6635">Jindalee</option>

          <option value="6636">Julatten</option>

          <option value="6637">Kawana Waters</option>

          <option value="6638">Kingaroy</option>

          <option value="6639">Lawnton</option>

          <option value="6640">Loganholme</option>

          <option value="6641">Mackay</option>

          <option value="6642">Mareeba</option>

          <option value="6643">Maroochydore</option>

          <option value="6644">Maroochydore-Mooloolaba</option>

          <option value="6645">Maryborough</option>

          <option value="6646">Miami</option>

          <option value="6647">Milton</option>

          <option value="6648">Molendinar</option>

          <option value="6649">Moranbah</option>

          <option value="6650">Morayfield</option>

          <option value="6651">Mossman</option>

          <option value="6652">Mount Glorious</option>

          <option value="6653">Mount Isa</option>

          <option value="6654">Murarrie</option>

          <option value="6655">Nairand Kay</option>

          <option value="6656">Nambour</option>

          <option value="6657">Nerang</option>

          <option value="6658">Nobby Beach</option>

          <option value="6659">Noosa Heads</option>

          <option value="6660">Noosaville</option>

          <option value="6661">Paddington</option>

          <option value="6662">Port Douglas</option>

          <option value="6663">Robina</option>

          <option value="6664">Rockhampton</option>

          <option value="6665">Rocklea</option>

          <option value="6666">Roma</option>

          <option value="6667">Rubyvale</option>

          <option value="6668">Sanctuary Cove</option>

          <option value="6669">Slade Point</option>
          <option value="6670">Southport</option>
          <option value="6671">Suburb</option>
          <option value="6672">Sunshine Coast</option>
          <option value="6673">Tewantin-Noosa</option>
          <option value="6674">The Summit</option>
          <option value="6675">Toowong</option>
          <option value="6676">Toowoomba</option>
          <option value="6677">Townsville</option>
          <option value="6678">Victoria Point</option>
          <option value="6679">Warwick</option>
          <option value="6680">Willawong</option>
          <option value="6681">Yatala</option>
          <option value="6682">Yeppoon</option>
          <option value="6683">Zillmere</option>
          <option value="6684">Bridgewater-Gagebrook</option>
          <option value="6685">Burnie</option>
          <option value="6686">Burnie-Devonport</option>
          <option value="6687">Glenorchy</option>
          <option value="6688">Hobart</option>
          <option value="6689">Kingston-Blackmans Bay</option>
          <option value="6690">Launceston</option>
          <option value="6691">New Norfolk</option>
          <option value="6692">Rowella</option>
          <option value="6693">Sheffield</option>
          <option value="6694">Ulverstone</option>
          <option value="6695">Templestowe</option>
          <option value="6696">Albion</option>
          <option value="6697">Ararat</option>
          <option value="6698">Avenel</option>
          <option value="6699">Avondale Heights</option>
          <option value="6700">Baccus Marsh</option>
          <option value="6701">Bairnsdale</option>
          <option value="6702">Ballarat</option>
          <option value="6703">Balwyn</option>
          <option value="6704">Batman</option>
          <option value="6705">Bayswater</option>
          <option value="6706">Belmont</option>
          <option value="6707">Benalla</option>
          <option value="6708">Bendigo</option>
          <option value="6709">Bentleigh East</option>
          <option value="6710">Berwick</option>
          <option value="6711">Blackburn</option>
          <option value="6712">Blue Mountains</option>
          <option value="6713">Boonah</option>
          <option value="6714">Boronia</option>
          <option value="6715">Box Hill</option>
          <option value="6716">Brighton East</option>
          <option value="6717">Bundoora</option>
          <option value="6718">Campbellfield</option>
          <option value="6719">Carlton South</option>
          <option value="6720">Caroline Springs</option>
          <option value="6721">Castle Hill</option>
          <option value="6722">Castlemaine</option>
          <option value="6723">Caulfield</option>
          <option value="6724">Cheltenham</option>
          <option value="6725">Chester</option>
          <option value="6726">Clayton South</option>
          <option value="6727">Clifton Springs</option>
          <option value="6728">Coburg</option>
          <option value="6729">Colac</option>
          <option value="6730">Collingwood</option>
          <option value="6731">Craigieburn</option>
          <option value="6732">Cranbourne</option>
          <option value="6733">Crib Point</option>
          <option value="6734">Dandenong</option>
          <option value="6735">Devon Meadows</option>
          <option value="6736">Diamond Creek</option>
          <option value="6737">Doncaster East</option>
          <option value="6738">Doncester</option>
          <option value="6739">Donvale</option>
          <option value="6740">Echuca-Moama</option>
          <option value="6741">Elsternwick</option>
          <option value="6742">Eltham</option>
          <option value="6743">Fairfield</option>
          <option value="6744">Fitzroy</option>
          <option value="6745">Frnakston</option>
          <option value="6746">Geelong</option>
          <option value="6747">Glen Waverley</option>
          <option value="6748">Glenorchy</option>
          <option value="6749">Hallam</option>
          <option value="6750">Hamilton</option>
          <option value="6751">Hastings</option>
          <option value="6752">Healesville</option>
          <option value="6753">Horsham</option>
          <option value="6754">Hughesdale</option>
          <option value="6755">Ivanhoe</option>
          <option value="6756">Keilor</option>
          <option value="6757">Kensington</option>
          <option value="6758">Kerang</option>
          <option value="6759">Kilmore</option>
          <option value="6760">Kilsyth</option>
          <option value="6761">Kyabram</option>
          <option value="6762">Lakes Entrance</option>
          <option value="6763">Lalor</option>
          <option value="6764">Lara</option>
          <option value="6765">Laverton North</option>
          <option value="6766">Leopold</option>
          <option value="6767">Lower Templestowe</option>
          <option value="6768">Maidstone</option>
          <option value="6769">Malvern</option>
          <option value="6770">Maryborough</option>
          <option value="6771">Melbourne</option>
          <option value="6772">Melton</option>
          <option value="6773">Middle Park</option>
          <option value="6774">Mildura</option>
          <option value="6775">Mitcham</option>
          <option value="6776">Moe-Yallourn</option>
          <option value="6777">Moorabbin</option>
          <option value="6778">Mordialloc</option>
          <option value="6779">Morwell</option>
          <option value="6780">Mulgrave</option>
          <option value="6781">Murrumbeena</option>
          <option value="6782">Neerim South</option>
          <option value="6783">Noble Park North</option>
          <option value="6784">Notting Hill</option>
          <option value="6785">Oak Park</option>
          <option value="6786">Ocean Grove-Barwon Heads</option>
          <option value="6787">Olinda</option>
          <option value="6788">Pakenham</option>
          <option value="6789">Park Orchards</option>
          <option value="6790">Port Melbourne</option>
          <option value="6791">Portland</option>
          <option value="6792">Prahran</option>
          <option value="6793">Preston</option>
          <option value="6794">Pritbourne</option>
          <option value="6795">Queenscliff</option>
          <option value="6796">Reservoir</option>
          <option value="6797">Ringwood</option>
          <option value="6798">Rowville</option>
          <option value="6799">Sale</option>
          <option value="6800">Sandringham</option>
          <option value="6801">Scoresby</option>
          <option value="6802">Sebastopol</option>
          <option value="6803">Seymour</option>
          <option value="6804">Shepparton-Mooroopna</option>
          <option value="6805">Somerville</option>
          <option value="6806">South Yarra</option>
          <option value="6807">Southbank</option>
          <option value="6808">St. Albans</option>
          <option value="6809">St. Kilda East</option>
          <option value="6810">Stawell</option>
          <option value="6811">Sunbury</option>
          <option value="6812">Sunshine West</option>
          <option value="6813">Swan Hill</option>
          <option value="6814">Tatura</option>
          <option value="6815">Thomastown</option>
          <option value="6816">Thornbury</option>
          <option value="6817">Tongala</option>
          <option value="6818">Torquay</option>
          <option value="6819">Traralgon</option>
          <option value="6820">Tullamarine</option>
          <option value="6821">Vermont</option>
          <option value="6822">Wangaratta</option>
          <option value="6823">Wantirna</option>
          <option value="6824">Warragul</option>
          <option value="6825">Warrnambool</option>
          <option value="6826">Welshpool</option>
          <option value="6827">Wendouree</option>
          <option value="6828">Wonthaggi</option>
          <option value="6829">Woodend</option>
          <option value="6830">Yarrawonga-Mulwala</option>
          <option value="6831">Yea</option>
          <option value="6832">Wheeler</option>
          <option value="6833">Eisenstadt</option>
          <option value="6834">GroBpetersdorf</option>
          <option value="6835">Jennersdorf</option>
          <option value="6836">Kemeten</option>
          <option value="6837">Mattersburg</option>
          <option value="6838">Neudorfl</option>
          <option value="6839">Neusiedl am See</option>
          <option value="6840">Oberwart</option>
          <option value="6841">Pinkafeld</option>
          <option value="6842">Rust</option>
          <option value="6843">Maria Rain</option>
          <option value="6844">Poggersdorf</option>
          <option value="6845">Althofen</option>
          <option value="6846">Arnoldstein</option>
          <option value="6847">Bad Sankt Leonhard</option>
          <option value="6848">Bleiburg</option>
          <option value="6849">Ebenthal</option>
          <option value="6850">Eberndorf</option>
          <option value="6851">Feldkirchen</option>
          <option value="6852">Ferlach</option>
          <option value="6853">Finkenstein</option>
          <option value="6854">Friesach</option>
          <option value="6855">Hermagor</option>
          <option value="6856">Klagenfurt</option>
          <option value="6857">Klagenfurt </option>
          <option value="6858">Lohnsburg</option>
          <option value="6859">Moosburg</option>
          <option value="6860">Paternion</option>
          <option value="6861">Radentheim</option>
          <option value="6862">Sankt Andra</option>
          <option value="6863">Sankt Jakob</option>
          <option value="6864">Sankt Veit</option>
          <option value="6865">Seeboden</option>
          <option value="6866">Spittal</option>
          <option value="6867">Velden am Worthersee</option>
          <option value="6868">Villach</option>
          <option value="6869">Volkermarkt</option>
          <option value="6870">Wernberg</option>
          <option value="6871">Wolfsberg</option>
          <option value="6872">Amstetten</option>
          <option value="6873">Bad Voslau</option>
          <option value="6874">Baden</option>
          <option value="6875">Berndorf</option>
          <option value="6876">Boheimkirchen</option>
          <option value="6877">Bruck an der Leitha</option>
          <option value="6878">Brunn</option>
        </select>
      </div>
    </>
  );
}
